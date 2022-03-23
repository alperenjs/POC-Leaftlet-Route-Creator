
var map = L.map('leafletMap');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var coordinates = [
    L.latLng(39.925533, 32.866287),
    L.latLng(38.626995, 34.719975),
    L.latLng(39.750359, 37.015598),
]

var lineColors = [{ color: 'black', opacity: 0.15, weight: 9 }, { color: 'white', opacity: 0.8, weight: 6 }, { color: 'red', opacity: 1, weight: 2 }];

function renderMap() {
    return L.Routing.control({
        draggableWaypoints: false,
        addWaypoints: false,
        autoRoute: true,
        showAlternatives: false,
        show: false,
        lineOptions: {
            styles: lineColors
        },
        waypoints: coordinates
    }).addTo(map);
}
control = renderMap();


//start changing line color example
// setTimeout(() => {
//     clearRoutes();
//     lineColors = [{ color: 'green', opacity: 0.15, weight: 9 }, { color: 'purple', opacity: 0.8, weight: 6 }, { color: 'white', opacity: 1, weight: 2 }];
// }, 1000);


// setTimeout(() => {
//     renderMap();
// }, 1500);
//end changing line color example


function clearRoutes() {
    control.spliceWaypoints(0, control.getWaypoints().length)
}

function addRoute(coordinates) {
    control.setWaypoints(coordinates)
}

function addMarker() { //adding marker popup info
    coordinates.forEach((coordinate, index) => {
        let marker = L.marker([coordinate.lat, coordinate.lng]).addTo(map);
        marker.bindPopup(` ${index + 1}. Rota Ziyareti`).openPopup();
    });
}
addMarker();

//onmarker hover
// var marker = new L.marker([39.925533, 32.86628]).addTo(map).on('mouseover', onClick);
//     marker.key = "marker-1";
//     function onClick(e) {
//     console.log(this.key); // i can expect my keys here
// }

//TEST ACTIONS

// setTimeout(() => {
//     coordinates.push(L.latLng(37.910000, 40.240002))
// }, 500);

// setTimeout(() => {
//     clearRoutes()
// }, 1500);

// setTimeout(() => {
//     addRoute(coordinates)
// }, 2500);


document.getElementById("btn").onclick = function () {
    alert("hello");
    return false;
};
