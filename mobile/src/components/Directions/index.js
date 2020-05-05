import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyAKvX7airusdaTaXxYdF9ArWxOYfIQDmXA"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
