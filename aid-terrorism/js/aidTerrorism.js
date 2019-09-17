makeMap({
  googleSheet: "1gG0m4xRVeBQ7eTypfZ0SQev_RxUK0uj_9IlyUqSev7c",
  mapID: "aid-terrorism",
  mapboxStyle: "cjx6b3hxq20jp1clmzipn0lxf",
  formatPopupContent: function(feature, map) {
    var jsons = map.json
      .reduce(function(a, b) {
        return {
          type: "FeatureCollection",
          features: a.features.concat(b.features)
        };
      })
      .features.map(function(f) {
        return f.properties;
      });

    var palestinianTerritories = ["Gaza Strip", "West Bank", "Palestine"];

    var countryData = jsons
      .filter(function(f) {
        return palestinianTerritories.indexOf(feature.properties.country) > -1
          ? palestinianTerritories.indexOf(f.country) > -1
          : f.country === feature.properties.country;
      })
      .reduce(function(a, b) {
        var countryTerrorismData = "";

        switch (feature.properties.country) {
          case "West Bank":
            countryTerrorismData +=
              a.country === "West Bank" && a.terrorism
                ? a.terrorism
                : b.country === "West Bank" && b.terrorism
                ? b.terrorism
                : "";
            break;

          case "Gaza Strip":
            countryTerrorismData +=
              a.country === "Gaza Strip" && a.terrorism
                ? a.terrorism
                : b.country === "Gaza Strip" && b.terrorism
                ? b.terrorism
                : "";
            break;

          case "Palestine":
            countryTerrorismData += a.terrorism + "~" + b.terrorism;
            break;

          default:
            countryTerrorismData = a.terrorism ? a.terrorism : b.terrorism;
        }

        return {
          country: feature.properties.country,
          terrorism: countryTerrorismData,
          foreign_assistance: a.foreign_assistance
            ? a.foreign_assistance
            : b.foreign_assistance,
          actual_assistance: a.actual_assistance
            ? a.actual_assistance
            : b.actual_assistance
        };
      });

    var groups = "",
      assistance = "",
      terrorism = countryData.terrorism;
    countryData.country =
      feature.properties.country === "Gambia"
        ? "The Gambia"
        : feature.properties.country;

    if (terrorism.length) {
      groups = `<div class="popupHeaderStyle">Terrorist Groups</div>
        <ul>${terrorism
          .split("~")
          .filter(function(t) {
            return t;
          })
          .map(function(group) {
            return `<li class='popupEntryStyle'>${group}</li>`;
          })
          .join("")}</ul>`;
    }

    if (countryData.actual_assistance) {
      countryData.actual_assistance = +countryData.actual_assistance;
      assistance = `<div class="popupHeaderStyle">Foreign Assistance: $${countryData.actual_assistance.toLocaleString()}</div><br>`;
    }

    return `<div class="popupTitleStyle">${countryData.country}</div>
        ${assistance}      ${groups}`;
  }
});
