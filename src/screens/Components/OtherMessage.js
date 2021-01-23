import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const OtherMessage = ({name, message, isRead, date}) => {
  return (
    <>
      <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingTop: 20}}>
            <View style={{flex:6, flexDirection: 'column', alignContent: 'center'}}>

              <View style={{alignItems: 'flex-start'}}>
                <Text style={{fontSize: 14, fontWeight: '700'}}>{name}</Text>
              </View>

              <View style={{alignItems:'flex-start', alignContent:'center', paddingTop: 10}}>
                <Text>{message}</Text>
              </View>

            </View>

            <View style={{flex:2, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center'}}>
                <Text style={{fontSize: 10, fontWeight: '300'}}>{date}</Text>
                <Text style={{fontSize: 10, fontWeight: '300'}}>{isRead ? 'Прочитано' : 'Не прочитано'}</Text>
            </View>

      </View>
    </>
  );
};

export default OtherMessage;
