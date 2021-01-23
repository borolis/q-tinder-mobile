import React, {useState, useEffect} from 'react';
import MapView, {Circle, Marker} from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import RangeSlider from '../Components/RangeSlider';
import {setSearchRange, setMoneyLimit} from '../../actions/searchScreenAction';
import {useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import MyCheckbox from '../Components/MyCheckbox';
import Accommodations from '../Components/Accommodations';
import SortParams from '../Components/SortParams';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
    height: 300,
    // paddingHorizontal:40
  },
  map: {
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0,
  },
});

const SearchTab = ({navigation}) => {
  // debugger

  const [marker, setMarker] = useState({
    latitude: 0.1334826,
    longitude: 60.6243353,
  });

  const [circle, setCircle] = useState({
    latitude: 0.1334826,
    longitude: 60.6243353,
  });
  //
  const [initialRegion, setInitialRegion] = useState({
    latitude: 56.8338817,
    longitude: 60.6247645,
    latitudeDelta: 0.0225,
    longitudeDelta: 0.0225,
  });
  //
  const [depositAllowance, setDepositAllowance] = useState(false);
  const [utilityBillsIncluded, setUtilityBillsIncluded] = useState(false);
  useEffect(() => {
    Geolocation.getCurrentPosition(({coords}) => {
      // debugger
      // setMarker({latitude: coords.latitude, longitude: coords.longitude});
      setInitialRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.0225,
        longitudeDelta: 0.0225,
      });
      setCircle({latitude: coords.latitude, longitude: coords.longitude});
    });
  }, []);

  const radius = useSelector(({searchScreen}) => searchScreen.searchRange);

  const searchSliderProperties = {
    initialValue: 5,
    minimumValue: 0.1,
    maximumValue: 15,
    step: 0.1,
    height: 15,
    text: 'Укажите радиус поиска',
    labelUnit: 'км',
    fractionDigits: 1,
  };

  const priceSliderProperties = {
    initialValue: 20000,
    minimumValue: 0,
    maximumValue: 100000,
    step: 1000,
    height: 15,
    text: 'Укажите диапазон цен',
    labelUnit: 'RUB',
    fractionDigits: 0,
  };

  return (
    <>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: '700', paddingBottom: 5}}>
          Фильры поиска
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', paddingBottom: 5}}>
          Выберите интересующее вас местоположение
        </Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <MapView
            // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            showsMyLocationButton
            showsUserLocation
            onRegionChange={(newRegion) => {
              setCircle({
                latitude: newRegion.latitude,
                longitude: newRegion.longitude,
              });
            }}
            initialRegion={initialRegion}>
            <Circle
              center={circle}
              radius={radius * 1000}
              fillColor={'rgba(123,123,123,0.3)'}
            />
            <Circle
              center={circle}
              radius={5}
              fillColor={'rgba(255,0,0,0.8)'}
            />
          </MapView>
        </View>

        <RangeSlider
          props={{
            sliderProperties: searchSliderProperties,
            action: setSearchRange,
            f: () => ({searchScreen}) => searchScreen.searchRange,
          }}
        />
        <RangeSlider
          props={{
            sliderProperties: priceSliderProperties,
            action: setMoneyLimit,
            f: () => ({searchScreen}) => searchScreen.moneyLimit,
          }}
        />

        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
            <MyCheckbox
              props={{
                checked: utilityBillsIncluded,
                setChecked: setUtilityBillsIncluded,
              }}
            />
            <Text style={{fontSize: 12, paddingTop: 10}}>
              Включая комунальные услуги
            </Text>
          </View>

          <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
            <MyCheckbox
              props={{
                checked: depositAllowance,
                setChecked: setDepositAllowance,
              }}
            />
            <Text style={{fontSize: 12, paddingTop: 10}}>
              Согласен на депозит
            </Text>
          </View>
        </View>

        <Accommodations />
        <SortParams />

        {/*<Icon name="chatbox-ellipses-outline"></Icon>*/}

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchList');
            }}>
            <Text style={{fontSize: 18, fontWeight: '400'}}>
              Перейти к поиску
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
export default SearchTab;
