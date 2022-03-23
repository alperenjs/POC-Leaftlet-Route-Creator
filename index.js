
var map = L.map('leafletMap');
var control = L.Routing.control({});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//kullanici-getir // sağdan seç

var coordinates = [
    L.latLng(39.925533, 32.866287),
    L.latLng(38.626995, 34.719975),
    L.latLng(39.750359, 37.015598),
]

control = L.Routing.control({
    draggableWaypoints: false,
    addWaypoints: false,
    autoRoute: true,
    showAlternatives: false,
    show: false,
    lineOptions: {
        styles: [{ color: 'black', opacity: 0.15, weight: 9 }, { color: 'white', opacity: 0.8, weight: 6 }, { color: 'red', opacity: 1, weight: 2 }]
    },
    waypoints: coordinates
}).addTo(map);


function clearRoutes() {
    control.spliceWaypoints(0, control.getWaypoints().length)
}

function addRoute() {
    control.setWaypoints(coordinates)
}

//TEST ACTIONS

setTimeout(() => {
    coordinates.push(L.latLng(37.910000, 40.240002))
}, 500);

setTimeout(() => {
    clearRoutes()
}, 1500);

setTimeout(() => {
    addRoute()
}, 2500);