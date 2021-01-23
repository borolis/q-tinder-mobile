import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import MyMessage from '../Components/MyMessage';
import OtherMessage from '../Components/OtherMessage';
import chatsContent from '../../mock/chatsContent';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatHistory = (props) => {
  const [chatMessages, setChatMessages] = useState({});
  const [newMessageText, setNewMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  const [login, setLogin] = useState('empty');
  const [token, setToken] = useState('empty');

  // debugger
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    AsyncStorage.getItem('token').then((tokenStorage) => {
      setToken(tokenStorage);
    });
    AsyncStorage.getItem('login').then((loginStorage) => {
      setLogin(loginStorage);
    });
  }, []);

  const loadChatsInfo = () => {
    let response = chatsContent;
    // debugger
    setMessages(
      response.filter((item) => props.route.params.login === item.login)[0]
        .messages,
    );
    // debugger;
  };

  useEffect(loadChatsInfo, []);

  useEffect(() => {
    if (login !== 'empty' && token !== 'empty') {
      // debugger
      axios
        .get(
          'http://sevensem.switzerlandnorth.azurecontainer.io/v1/messages/getMessages',
          {
            params: {
              login1: login,
              login2: props.route.params.login,
            },
            headers: {
              Authorization: 'Bearer ' + token,
            },
          },
        )
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => {
          // debugger
          console.log(err);
        });
    }
  }, [login, token]);

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
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, ...avatarContainerStyle}}>
            <Image
              style={avatarStyle}
              source={{
                uri: props.route.params.avatarUrl,
              }}
            />
          </View>

          <View style={{flex: 5, paddingLeft: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              {props.route.params.name}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '300'}}>
              {props.route.params.descriptions.firstLine}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '300'}}>
              {props.route.params.descriptions.secondLine}
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 5, flexDirection: 'column'}}>
        <View style={{flex: 6}}>
          {messages.map((message) => {
            if (message.loginFrom === props.route.params.login) {
              return (
                <OtherMessage
                  name={props.route.params.name}
                  message={message.message}
                  isRead={true}
                  date={message.time}
                />
              );
            } else {
              return (
                <MyMessage
                  name={'Вы'}
                  message={message.message}
                  isRead={message.watched}
                  date={message.date}
                />
              );
            }
          })}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          onChangeText={(text) => setNewMessageText(text)}
          value={newMessageText}
          style={{width: '80%'}}
        />

        <TouchableOpacity
          onPress={() => {
            setNewMessageText('');
            console.log('Sent mock');
          }}>
          <Icon
            style={{paddingLeft: 10, fontSize: 32}}
            name={'send-outline'}
            color={'black'}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChatHistory;
