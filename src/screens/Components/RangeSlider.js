import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Slider from '@react-native-community/slider';
const RangeSlider = ({props}) => {
  const {sliderProperties, action, f} = props;
  const dispatch = useDispatch();

  let value = useSelector(f());

  return (
    <View
      style={{
        alignItems: 'center',
        paddingTop: 5,
        paddingHorizontal: 40,
      }}>
      <Text style={{fontSize: 14, fontWeight: '400', paddingBottom: 5}}>
        {sliderProperties.text}
      </Text>

      <View style={{flexDirection: 'row'}}>
        <Slider
          style={{width: '108%', height: sliderProperties.height}}
          minimumValue={sliderProperties.minimumValue}
          value={sliderProperties.initialValue}
          step={sliderProperties.step}
          onValueChange={(value) => {
            dispatch(action(value));
          }}
          maximumValue={sliderProperties.maximumValue}
          minimumTrackTintColor={'#000000'}
          maximumTrackTintColor={'#000000'}
          thumbTintColor={'#6b757e'}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            {sliderProperties.minimumValue} {sliderProperties.labelUnit}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 14, fontWeight: '400'}}>
            {value.toFixed(sliderProperties.fractionDigits)} {sliderProperties.labelUnit}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            {sliderProperties.maximumValue} {sliderProperties.labelUnit}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default RangeSlider;
