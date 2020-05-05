import React, { useState, useEffect } from 'react';

import MapView, { Marker } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import Background from '../../components/Background';
import Header from '../../components/Header';
import ButtonGradient from '../../components/ButtonGradient';
import Directions from '../../components/Directions';


export default function Maps({ navigation }) {

  const [currentRegion, setCurrentRegion] = useState(null);
  const [drone, setDrone] = useState({
    latitude: -27.1004575,
    longitude: -52.6011445
  });

  const [drones, setDrones] = useState([
    { latitude: -27.1011575, longitude: -52.1111425 },
    { latitude: -29.1022573, longitude: -52.6211435 },
    { latitude: -21.1033585, longitude: -52.2311455 },
    { latitude: -22.1044515, longitude: -52.9411446 },
    { latitude: -26.1055550, longitude: -53.6511495 },
    { latitude: -22.1066576, longitude: -51.6611425 },
    { latitude: -23.1077545, longitude: -50.6711125 },
    { latitude: -27.1088578, longitude: -51.2811245 },
    { latitude: -26.1099535, longitude: -52.7911345 },
    { latitude: -21.1091175, longitude: -52.1011144 },
    { latitude: -22.1012275, longitude: -52.7111495 },
    { latitude: -23.1023375, longitude: -52.9211415 },
  ]);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })

      }
    }

    loadInitialPosition();
  }, []);

  return <Background>
    <Header title="Finalizar Compra" navigation={navigation} />

    <MapView
      initialRegion={currentRegion}
      style={{ flex: 1 }}
    >

      {
        drones.map(dron => (
          <Marker
            key={dron.latitude + dron.longitude}
            coordinate={{...dron}}
            image={require('../../assets/drone.png')}
          />
        ))
      }

      <Marker
        coordinate={drone}
        image={require('../../assets/drone.png')}
      />

    </MapView>



    <ButtonGradient onPress={() => navigation.navigate('Maps')}>Finalizar</ButtonGradient>

  </Background>
}
