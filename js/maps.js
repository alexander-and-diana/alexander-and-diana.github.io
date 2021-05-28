function initMap() {

    var element = document.getElementById('map');
    var options = {
        zoom: 12,
        center: {lat: 55.19115448235065, lng: 30.20450094771684},
    };

    var myMap = new google.maps.Map(element, options);

    var markers = [
        {
            coordinates: {lat: 55.1669302107952, lng: 30.255652732493242},
            info: '<h3>Остановка: Микрорайон "Билево-1"</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
        },
        {
            coordinates: {lat: 55.174049271491064, lng:30.259055255252076},
            info: '<h3>Остановка: ул. Короткевича</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
        },
        {
            coordinates: {lat: 55.17270982529784, lng:30.268961093149045},
            info: '<h3>Остановка: ул. Баграмяна</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
        },

    ];

    for(var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: myMap
        });

        if(properties.image) {
            marker.setIcon(properties.image);
        }

        if(properties.info) {
            var InfoWindow = new google.maps.InfoWindow({
                content: properties.info
            });

            marker.addListener('click', function(){
                InfoWindow.open(myMap, marker);
            });
        }
    }
}

// directionsDisplay = new google.maps.DirectionsRenderer();

//     var request = {
//         origin: new google.maps.LatLng(60.023539414725356,30.283663272857666), //точка старта
//         destination: new google.maps.LatLng(59.79530896374892,30.410317182540894), //точка финиша
//         travelMode: google.maps.DirectionsTravelMode.DRIVING //режим прокладки маршрута
//     };

//     directionsService.route(request, function(response, status) {
//         if (status == google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);
//         }
//     });

//     directionsDisplay.setMap(map);