import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './Components/Header';
import axios from 'axios';
import {AsyncStorage} from 'react-native';

const AuthScreen = ({navigation}) => {
  const [login, setLogin] = useState('borolis1');
  const [password, setPassword] = useState('borolis1');
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(login.length > 0 && password.length > 0);
  }, [login, password]);

  const getToken = () => {
    axios
      .post(
        'http://sevensem.switzerlandnorth.azurecontainer.io/v1/user/signin',
        {
          login: login,
          password: password,
        },
        [],
      )
      .then((res) => {
        console.log(res);
        AsyncStorage.setItem('token', res.data).then(() => {
          console.log('auth successful, token saved');
        });
        AsyncStorage.setItem('login', login).then(() => {
          console.log('auth successful, login saved');
        });
      })
      .catch((err) => console.log(err));
  };

  const {
    quarText,
    tinderText,
    textInput,
    loginText,
    registerText,
    touchableLogin,
    touchableRegister,
  } = styles;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Header />

        <View
          style={{
            paddingTop: 30,
            paddingHorizontal: 40,
          }}>
          <TextInput
            style={textInput}
            onChangeText={(text) => setLogin(text)}
            value={login}
            placeholder={'Логин'}
          />
          <TextInput
            style={textInput}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder={'Пароль'}
          />

          <TouchableOpacity
            disabled={!isDisabled}
            style={
              isDisabled
                ? touchableLogin
                : [touchableLogin, {backgroundColor: '#e9a1cd'}]
            }
            onPress={() => {
              getToken();
              navigation.navigate('HomeScreen');
            }}>
            <Text style={loginText}>Войти</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity style={touchableRegister}>
          <Text style={registerText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

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
    backgroundColor: '#9a035d',
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

export default AuthScreen;
