mapboxgl.accessToken = mapToken;

console.log(mapToken)

const map = new mapboxgl.Map({
    container: 'map',
    // You can add layers to the predetermined slots within the Standard style basemap.
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates,  // [lng, lt]
    zoom: 10,
    maxZoom: 15
});

console.log(mapToken)
console.log(listing.geometry.coordinates);

const marker = new mapboxgl.Marker({color: 'red'})
.setLngLat(listing.geometry.coordinates)  // listing.geometry.coordinates
// .setPopup(new mapboxgl.Popup({offset: 25})
//     .setLngLat(e.lngLat).setHTML(
//         `<h4>${listing.location}</h4><p>Exact Location provided afterbooking</p>`)
// )
.addTo(map);