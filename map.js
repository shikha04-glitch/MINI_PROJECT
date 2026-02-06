const map = L.map('map').setView([20.5937, 78.9629], 5); // India center

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Get data from localStorage
let events = JSON.parse(localStorage.getItem("events")) || [];
let tracking = JSON.parse(localStorage.getItem("tracking")) || [];

// Helper function: convert location name to coordinates
function getCoordinates(place, callback) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        callback([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    })
    .catch(err => console.log("Geocoding error:", err));
}

// Show latest disaster location (STEP 1)
if (events.length > 0) {
  const lastEvent = events[events.length - 1];
  getCoordinates(lastEvent.location, coords => {
    L.marker(coords).addTo(map)
      .bindPopup(`Disaster: ${lastEvent.type}<br>Severity: ${lastEvent.severity}<br>Location: ${lastEvent.location}`)
      .openPopup();
    map.setView(coords, 7);
  });
}

// Show tracking routes (STEP 5)
tracking.forEach(track => {
  // Assume resource center = resource location (if available later)
  // For now, route from last event to tracking area
  if (events.length > 0) {
    const lastEvent = events[events.length - 1];

    getCoordinates(lastEvent.location, startCoords => {
      getCoordinates(track.area, endCoords => {
        // Destination marker
        L.marker(endCoords).addTo(map)
          .bindPopup(`Resource: ${track.resource}<br>Status: ${track.status}<br>Area: ${track.area}`);

        // Route line
        L.polyline([startCoords, endCoords], { color: 'blue' }).addTo(map);
      });
    });
  }
});