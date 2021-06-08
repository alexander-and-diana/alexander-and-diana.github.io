function initMap() {

    var element = document.getElementById('map');
    var options = {
        zoom: 12,
        center: {lat: 55.17096802673227, lng: 30.283152392418877},
    };

    var myMap = new google.maps.Map(element, options);

    var markers = [
        {
            coordinates: {lat: 55.1948330836893, lng: 30.18748333909543},
            info: '<h3>Остановка: Вокзал</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
        },
        {
            coordinates: {lat: 55.19117651298901, lng: 30.20587442474107},
            info: '<h3>Площадь свободы</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
        },
        {
            coordinates: {lat: 55.177426603844616, lng: 30.227803980924563},
            info: '<h3>Университет им. П.М. Машерова</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
        },
        {
            coordinates: {lat: 55.16986977158808, lng: 30.22755598294689},
            info: '<h3>Ледовый дворец</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
        },
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
        {
            coordinates: {lat: 55.13808803063548, lng:30.41839969854628},
            info: '<h3>Фазенда Николаево</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
        }

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

    
directionsDisplay = new google.maps.DirectionsRenderer();

var request = {
    origin: new google.maps.LatLng(55.1948330836893,30.18748333909543), //точка старта
    destination: new google.maps.LatLng(55.13808803063548,30.41839969854628), //точка финиша
    travelMode: google.maps.DirectionsTravelMode.DRIVING //режим прокладки маршрута
};

const directionsService = new google.maps.DirectionsService();

directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
    }
});

directionsDisplay.setMap(myMap);
}
https://www.google.com/maps/dir/55.1948330836893,+30.18748333909543/55.19117651298901,+30.20587442474107/55.177426603844616,+30.227803980924563/55.16986977158808,+30.22755598294689/55.1669302107952,+30.255652732493242/55.174049271491064,+30.259055255252076/55.17270982529784,+30.268961093149045/55.13808803063548,+30.41839969854628/@55.1663848,30.2326772,12z/data=!3m1!4b1!4m34!4m33!1m3!2m2!1d30.1874833!2d55.1948331!1m3!2m2!1d30.2058744!2d55.1911765!1m3!2m2!1d30.227804!2d55.1774266!1m3!2m2!1d30.227556!2d55.1698698!1m3!2m2!1d30.2556527!2d55.1669302!1m3!2m2!1d30.2590553!2d55.1740493!1m3!2m2!1d30.2689611!2d55.1727098!1m3!2m2!1d30.4183997!2d55.138088!3e0?hl=ru

https://goo.gl/maps/xFwJb7wrZQef1Lm18