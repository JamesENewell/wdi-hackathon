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
      zoom: 2
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
      const marker = new google.maps.Marker({
        position: place.location,
        map: this.map
      });
      marker.addListener('click', () => {
        this.infoWindow.setContent(`
          <a href="/#/venues/${venue._id}">
          <h3>${venue.name}</h3>
        <p>${venue.address}</p>
        </a>
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
