import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';

const BottomSheetHeader = ({currentPlace}) => {
  useEffect(() => {
    // console.log(currentPlace)
  }, []);

  const border = {
    borderWidth: 1,
    borderColor: 'red',
  };

  const avatarStyle = {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  };

  const avatarContainerStyle = {
    height: 60,
  };

  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, ...avatarContainerStyle}}>
          <Image
            style={avatarStyle}
            source={{
              uri: currentPlace.owner.avatar,
            }}
          />
        </View>

        <View style={{flex: 5, paddingLeft: 20}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            {currentPlace.owner.name}
          </Text>
          <Text style={{fontSize: 14, fontWeight: '300'}}>
            {currentPlace.place.type}, {currentPlace.place.rooms} комната(ы),{' '}
            {currentPlace.place.distance} км от вас
          </Text>
          <Text style={{fontSize: 14, fontWeight: '300'}}>
            {currentPlace.place.price} руб. в месяц, к/у{' '}
            {currentPlace.place.utilityBills} руб. в месяц
          </Text>
        </View>
      </View>
    </>
  );
};
export default BottomSheetHeader;
