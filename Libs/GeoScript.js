    navigator.geolocation.getCurrentPosition(updatePosition);

    function updatePosition(pos) {

        var position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

        var options = {
            zoom: 15,
            center: position,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        };

        var map = new google.maps.Map(document.getElementById("map"), options);

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: "Это Вы!"
        });

        var infowindow = new google.maps.InfoWindow({
            content: "Вы тут"
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }
