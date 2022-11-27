// import React from "react";
// import "./Weather.css";

// function Weather() {
//   function getPosSuccess(pos) {
//     // Get the coordinates of the current possition.
//     var geoLat = String(pos.coords.latitude.toFixed(5));
//     var geoLng = String(pos.coords.longitude.toFixed(5));

//     //Create an iframe and use the current location data
//     var iSource =
//       "https://forecast.io/embed/#lat=" +
//       geoLat +
//       "&lon=" +
//       geoLng +
//       "&name=Woot&color=#00aaff";
//     $("<iframe>") // Creates the element
//       .attr("src", iSource) // Sets the attribute spry:region="myDs"
//       .attr("height", 245) // Set the height
//       .attr("width", "100%") // Set the width
//       .appendTo("#id-weather"); // Append to an existing element ID
//   }

//   return (
//     <div className="weather">
//       <div id="id-weather"></div>
//     </div>
//   );
// }

// export default Weather;
