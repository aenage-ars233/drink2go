/* eslint-disable no-undef */
const mapContainer = document.querySelector('.map__map');
mapContainer.innerHTML = '';

const map = L.map('map').setView({
  lat: 59.96831,
  lng: 30.31748,
}, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerIcon = L.icon({
  iconUrl: '../images/map-marker.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: markerIcon,
  }
);
marker.addTo(map);
