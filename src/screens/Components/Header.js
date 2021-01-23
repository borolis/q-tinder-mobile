import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={quarText}>Квар</Text>
        <Text style={tinderText}>Tinder!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quarText: {
    fontSize: 48,
    fontWeight: '400',
    color: 'black',
  },
  tinderText: {
    fontSize: 48,
    fontWeight: '700',
    color: '#9a035d',
  },
  loginText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  registerText: {
    fontSize: 18,
    fontWeight: '300',
    color: '#7E7C7C',
  },
  touchableLogin: {
    backgroundColor: '#088fe7',
    borderRadius: 5,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableRegister: {
    borderRadius: 5,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 42,
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 16,
    fontWeight: '400',
  },
});

const {
  quarText,
  tinderText,
  textInput,
  loginText,
  registerText,
  touchableLogin,
  touchableRegister,
} = styles;
