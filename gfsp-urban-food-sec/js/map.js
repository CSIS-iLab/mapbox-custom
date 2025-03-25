mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw";
const map = new mapboxgl.Map({
  container: "map",
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/ilabmedia/cm8i3wrep01bz01s5e0cq2akz",
  center: [70.762, 29.482],
  zoom: 3.87,
});

// Create a popup instance that doesn't include a close button
const popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
});

// This variable tracks the currently hovered feature ID
let currentFeatureId = null;

// Wait for the map to load before fetching data
map.on("load", () => {
  // Adjust the path if necessary; the path is relative to the HTML file
  fetch("data/2025_03_25.csv")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((csvText) => {
      // Add the vector tileset as a source.
      map.addSource("regions", {
        type: "vector",
        url: "mapbox://ilabmedia.5weddc4x",
      });

      // Parse the CSV using PapaParse. Assumes the CSV has headers "UID" and "class_value"
      const parsed = Papa.parse(csvText, { header: true });
      const data = parsed.data;

      // Build a GL match expression that defines the color for every vector tile feature.
      // Use the GID_3 code as the lookup key for the country shape.
      const colorMatch = ["match", ["get", "GID_3"]];

      // Create a lookup object to display region classifications in the popup
      const classificationLookup = {};

      const colors = {
        1: "#EDCE7A",
        2: "#9ECDB2",
        3: "#3a8ee2",
        NA: "#D6D7D5",
      };

      // Calculate color values for each country based on 'class_value' value
      data.forEach((row) => {
        // Convert class_value to a number and compute the green intensity (0-255)
        // const classValue = parseFloat(row.class_value);
        // const green = Math.round(255 / classValue);
        // const color = `rgb(0, ${green}, 0)`;
        const color = colors[row.class_value] || "#D6D7D5";
        colorMatch.push(row.UID, color);

        // Populate the classification lookup
        classificationLookup[row.UID] = row.classification;
      });

      // Default color for countries with no data
      colorMatch.push("#D6D7D5");

      // Add the layer to create the choropleth using the dynamic match expression
      map.addLayer(
        {
          id: "regions-join",
          type: "fill",
          source: "regions",
          "source-layer": "gadm41_PAK_3-az7wtd",
          paint: {
            "fill-color": colorMatch,
            "fill-outline-color": "#8e9c98",
          },
        },
        "admin-1-boundary-bg"
      );

      map.on("mousemove", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["regions-join"],
        });

        if (features.length) {
          const feature = features[0];
          // If we're still on the same feature, no need to update
          if (currentFeatureId !== feature.properties.GID_3) {
            currentFeatureId = feature.properties.GID_3;
            // Compute the centroid using Turf.js
            const centroid = turf.centroid(feature);
            const classification =
              classificationLookup[feature.properties.GID_3] ||
              "No classification";

            popup
              .setLngLat(centroid.geometry.coordinates)
              .setHTML(
                `<h3>${feature.properties.GID_3}</h3><p>Classification: ${classification}</p>`
              )
              .addTo(map);
          }
        } else {
          // No features under the mouse, so clear the popup
          currentFeatureId = null;
          popup.remove();
        }
      });

      // Optionally, change the cursor when over a feature
      map.on("mouseenter", "regions-join", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "regions-join", () => {
        map.getCanvas().style.cursor = "";
      });
    })
    .catch((error) => {
      console.error("Error loading the CSV data:", error);
    });
});
