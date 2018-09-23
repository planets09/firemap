// break-down:
// 1) Have a drop-down menu listing State.
// 2) Once user selects State from drop-down menu, the map
// should then center on that particular State and populate with fire info.
// 2) Drop a "pin" on location of fire - use "fire icon".
// 3) Toggle option / switch views between satellite and street view.
// 4) Have zoom-in and zoom-out icons to see details of map.
// 5) Have a pop-up window that will allow user to render the map into 3D view option (not sure if this can be done). 
// 6) Have links to environmental issues.


// Issues: How to find and access the list of fires API. Tried
// to use GraphQL and access similar list from last week, but cannot
// get API to run.



var mymap = L.map('mapid');

var marker = L.marker([37.763418, -122.492105]).addTo(mymap);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 25,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicGxhbmV0czA5IiwiYSI6ImNqbGQ2dHN2bDA4NjUza21pZXM5ZjgxNW8ifQ.dDpaQ6n-iZnfNf-lVtWmTw'
}).addTo(mymap);


var popup = L.popup();

function onMapClick(el){
    popup.setLatLng(el.latlng);
    popup.setContent("You clicked the map at " + el.latlng.toString());
    popup.openOn(mymap);
}
mymap.on('click', onMapClick);





// Vue.component('mydropdown', {
//     template: '<h1>test</h1>'
// })
function resetStateLocation(lat, long, zoom) {
    mymap.setView(lat, long, zoom);
}

new Vue({
    el: '#dropdown-group',
    data: {
        message: 'Testing Site!',
        lat: 37.0902,
        long: 95.7129,
        zoom: 4
    },
    methods: {
        resetStateLocation: resetStateLocation
    },
    beforeMount: function() {
        resetStateLocation(40.0, 40.0, 5)
    }
});

