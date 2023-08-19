function myMap() 
{
    var myLatlng = new google.maps.LatLng(22.55,88.35);
    var mapOptions = {
    zoom: 10,
    center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });

    marker.setMap(map);

}
