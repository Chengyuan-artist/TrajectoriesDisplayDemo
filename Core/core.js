var mapOptions = {
    center: [30.518659, 114.419825],//114.419825,30.518659
    zoom: 14,
 }

var map = new L.map('my_map', mapOptions);

var layer = new L.TileLayer('http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}');

map.addLayer(layer);

var path = [[30.509513, 114.413441],[30.508874, 114.421572],[30.510856, 114.419598],[30.508945, 114.407363]];

var polyline = L.polyline(path,{color:'red'}).addTo(map);

map.fitBounds(polyline.getBounds());