<template>
  <div class="map"></div>
</template>

<script>
/* global google*/
export default {
  name: 'GoogleMap',
  props: ['center', 'places'],
  mounted() {
    this.map = new google.maps.Map(this.$el, {
      center: this.center || { lat: 51.515, lng: -0.078 },
      zoom: 2,
      styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#aad2e3"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
    });

    this.infoWindow = new google.maps.InfoWindow();
  },
  watch: {
  places() {
    if (this.markers) {
      this.markers.map(marker => marker.setMap(null));
    }
    this.bounds = new google.maps.LatLngBounds();
    this.markers = this.places.map(place => {
      this.bounds.extend(place.location);
      const icon = {
        url: place.flag, // url
        scaledSize: new google.maps.Size(20, 12), // scaled size
      };
      const marker = new google.maps.Marker({
        position: place.location,
        icon: icon,
        map: this.map,
      });
      marker.addListener('click', () => {
        this.infoWindow.setContent(`
          <img src=${place.flag} heigh=30 width=60 />
          <h3>${place.name}</h3>
          <p>Capital: ${place.capital}</p>
          <p>Population: ${place.population}</p>
        `);
        this.infoWindow.open(this.map, marker);
      });
      return marker;
    });
    console.log(this.markers);
    this.map.panTo(this.bounds.getCenter());
  },
  center() {
    this.map.setCenter(this.center);
    this.marker = new google.maps.Marker({
      position: this.center,
      map: this.map
    });
  }
}
}
</script>
