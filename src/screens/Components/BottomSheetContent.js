import React, {useState, useEffect} from 'react';
import MapView, {Circle, Marker} from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Linking, Alert, Platform } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Accommodations from '../Components/Accommodations';
import SortParams from '../Components/SortParams';
import {Checkbox} from 'react-native-paper';

const BottomSheetContent = ({currentPlace}) => {


  const border = {
    borderWidth: 1,
    borderColor: 'red',
  };

  const checkboxesStyle = {
    paddingHorizontal: 10,
  };

  const styles = StyleSheet.create({
    container: {
      height: 250,
      paddingHorizontal: 20,
      // ...border,
      // paddingHorizontal:40
    },
    map: {
      height: 250,
    },
  });

  const initialRegion = {
    latitude: 56.8338817,
    longitude: 60.6247645,
    latitudeDelta: 0.0225,
    longitudeDelta: 0.0225,
  }

  const checkboxLabel = {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 8,
  }

  const actionButtonContainerStyle = {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  }

  const actionButtonStyle = {
    fontSize: 24,
    fontWeight: '600',
  }

  return (
    <>
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text>
          При заселении взимается депозит {currentPlace.place.deposit} рублей.{' '}
        </Text>
        <Text />
        <Text>Год постройки дома: {currentPlace.place.year}</Text>
        <Text>Количество этажей: {currentPlace.place.floors}</Text>
        <Text />
        <Text>Местоположение дома:</Text>
      </View>

      <View style={styles.container}>
        <MapView
          // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsMyLocationButton
          showsUserLocation
          initialRegion={initialRegion}>
          <Marker
            coordinate={{latitude: currentPlace.place.location.latitude,
              longitude: currentPlace.place.location.longitude}}
            title={"Туть"}></Marker>

        </MapView>
      </View>

      <View style={[checkboxesStyle]}>
        <View style={{flexDirection: 'row'}}>
        <Checkbox status={currentPlace.allowance.animals.large?'checked':'unchecked'}/>
        <Text style={checkboxLabel}>Можно с крупными животными</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Checkbox status={currentPlace.allowance.animals.small?'checked':'unchecked'}/>
          <Text style={checkboxLabel}>Можно с мелкими животными</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Checkbox status={currentPlace.allowance.animals.child?'checked':'unchecked'}/>
          <Text style={checkboxLabel}>Можно с детьми</Text>
        </View>

      </View>

      <View style={{paddingHorizontal:20}}>

        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Комментарий от собственника:</Text>
        <Text>{currentPlace.place.comment}</Text>

      </View>

      <View style={actionButtonContainerStyle}>
        <TouchableOpacity><Text style={actionButtonStyle}>Написать</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {
          Linking.openURL('tel:' + currentPlace.owner.phone);
        }}>
          <Text style={actionButtonStyle}>Позвонить</Text>
        </TouchableOpacity>
      </View>


    </>
  );
};
export default BottomSheetContent;
