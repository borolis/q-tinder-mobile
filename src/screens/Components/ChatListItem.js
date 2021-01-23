import React, {useState, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
const ChatListItem = ({name, desctiption, avatarUrl, newMessages}) => {



  const border = {
    borderWidth: 1,
    borderColor: 'green',
  };

  const avatarStyle = {
    width: 60,
    height: '100%',
    borderRadius: 50,
  };

  const avatarContainerStyle = {
    height: 60,
  };

  return (
    <>
      <View style={{flexDirection: 'row', paddingVertical: 5}}>
        <View style={{flex: 2, ...avatarContainerStyle}}>
          <Image
            style={avatarStyle}
            source={{
              uri: avatarUrl,
            }}
          />
        </View>

        <View style={{flex: 8, paddingLeft: 20, justifyContent: 'center'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>{name}</Text>
          <Text style={{fontSize: 14, fontWeight: '300'}}>{desctiption.firstLine}</Text>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: newMessages ? '#9a035d' : 'rgb(242,242,242)',
              borderRadius: 5,
            }}
          />
        </View>
      </View>
    </>
  );
};
export default ChatListItem;
