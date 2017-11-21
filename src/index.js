const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiYXZicmF1biIsImEiOiJjamE5c3JibjMwYjdhMndwZXdybDRlZXA1In0.Y3PgzgiLq-XRXO5oE1FeDg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-73.94, 40.7], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const bkMuseum = buildMarker('activities', [-73.9636, 40.6712]).addTo(map);
const bam = buildMarker('activities', [-73.9776, 40.6865]).addTo(map);
const propsectPark = buildMarker('activities', [-73.9690, 40.6602]).addTo(map);
const madiba = buildMarker('restaurants', [-73.9718, 40.6897]).addTo(map);
const bombaySpice = buildMarker('restaurants', [-73.9526, 40.6760]).addTo(map);
const brooklynPromenade = buildMarker('activities', [-73.9933, 40.6960]).addTo(map);
const cakeShop = buildMarker('restaurants', [-73.9878, 40.7208]).addTo(map);
const hotelLeBleu = buildMarker('hotels', [-73.9871, 40.6733]).addTo(map);


function dropDownFunc() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}


module.exports = mapboxgl;
