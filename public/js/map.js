mapboxgl.accessToken = mapToken;

console.log(mapToken)

const map = new mapboxgl.Map({
    container: 'map',
    // You can add layers to the predetermined slots within the Standard style basemap.
    style: 'mapbox://styles/mapbox/streets-v11',
    center: listing.geometry.coordinates,  // [lng, lt]
    zoom: 10,
    maxZoom: 15
});

console.log(mapToken)
console.log(listing.geometry.coordinates);

new mapboxgl.Marker({color: 'red'})
    .setLngLat(listing.geometry.coordinates) // Ensure this is [longitude, latitude]
    .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`)
    )
    .addTo(map);