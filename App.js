import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import searchScreenReducer from './src/reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const store = createStore(
  searchScreenReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
