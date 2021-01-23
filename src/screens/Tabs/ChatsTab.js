import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Header from '../Components/Header';
import ChatListItem from '../Components/ChatListItem';
import chatsList from '../../mock/chats';
import axios from 'axios';
import { setChatsList } from '../../actions/apiAction';
const ChatsTab = ({navigation}) => {

  const [chatsInfo, setChatsInfo] = useState([]);

  useEffect(() => {
    let request = chatsList;
    setChatsInfo(request);

    // axios
    //   .get(
    //     'http://sevensem.switzerlandnorth.azurecontainer.io/v1/messages/getChats',
    //     {
    //       params: {
    //         login1: login,
    //       },
    //       headers: {
    //         Authorization: 'Bearer ' + token,
    //       },
    //     },
    //   )
    //   .then((res) => {
    //     setChatsList(res.data);
    //   })
    //   .catch((err) => {
    //     // debugger
    //     console.log(err);
    //   });

  }, []);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1}}>
        <Header />
      </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>Диалоги</Text>
      </View>

      <View style={{flex: 8, paddingHorizontal: 16}}>
        {chatsInfo.map(
          ({id, name, descriptions, avatarUrl, newMessages, login}) => (
            <TouchableOpacity
              onPress={() => {
                // alert('pressed: ' + id);
                navigation.navigate('ChatHistory', {
                  id,
                  name,
                  descriptions,
                  avatarUrl,
                  newMessages,
                  login,
                });
              }}>
              <ChatListItem
                name={name}
                desctiption={descriptions}
                avatarUrl={avatarUrl}
                newMessages={newMessages}
              />
            </TouchableOpacity>
          ),
        )}
      </View>
    </View>
  );
};
export default ChatsTab;
