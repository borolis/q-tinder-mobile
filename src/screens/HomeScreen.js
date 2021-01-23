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
import TestChatsTab from './Tabs/TestChatsTab';
import TestSearchTab from './Tabs/TestSearchTab';
import SettingsTab from './Tabs/SettingsTab';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Tab.Navigator>
        <Tab.Screen
          name="Search"
          component={TestSearchTab}
          options={{
            tabBarLabel: 'Поиск',
            tabBarIcon: ({color, size}) => (
              <Icon name="search-outline" color={color} size={size} />
            ),
            // tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Chats"
          component={TestChatsTab}
          options={{
            tabBarLabel: 'Диалоги',
            tabBarIcon: ({color, size}) => (
              <Icon name="chatbox-ellipses-outline" color={color} size={size} />
            ),
            // tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsTab}
          options={{
            tabBarLabel: 'Настройки',
            tabBarIcon: ({color, size}) => (
              <Icon name="settings-outline" color={color} size={size} />
            ),
            // tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
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

export default HomeScreen;
