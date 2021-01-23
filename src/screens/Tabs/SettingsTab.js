import React, {useState, useEffect} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Header from '../Components/Header';
import {Checkbox, TextInput, RadioButton} from 'react-native-paper';
import {AsyncStorage} from 'react-native';

import profile from '../../mock/profile';
import MyCheckbox from '../Components/MyCheckbox';
import axios from 'axios';

const SettingsTab = ({navigation}) => {
  const [animalAllowance, setAnimalAllowance] = useState(false);
  const [animalType, setAnimalType] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [duration, setDuration] = useState('6 месяцев');
  const [peopleLimit, setPeopleLimit] = useState(1);
  const [kidsAllowance, setKidsAllowance] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');

  const loadProfileInfo = () => {
    let response = profile;
    setAnimalAllowance(response.needAnimalAllowance);
    setAnimalType(response.animalType);
    setName(response.name);
    setPhone(response.phone);
    setDuration(response.duration);
    setPeopleLimit(response.peopleLimit);
    setKidsAllowance(response.needKidsAllowance);
    setAvatarUrl(response.avatarUrl);
  };

  useEffect(() => {
    loadProfileInfo();
  }, []);

  const updateProfileInfo = () => {
    // axios.post(
    //     'http://sevensem.switzerlandnorth.azurecontainer.io/v1/messages/profile',
    //     {name,
    //       phone,
    //       duration,
    //       peopleLimit,
    //       kidsAllowance,
    //       animalAllowance,
    //       animalType,
    //       avatarUrl},
    //       headers: {
    //         Authorization: 'Bearer ' + token,
    //       },
    //     },
    //   )
    //   .then((res) => {
    //     alert('Информация о профиле успешно обновлена');
    //   })
    //   .catch((err) => {
    //     // debugger
    //     alert('Ошибка при запросе к серверу');
    //     console.log(err);
    //   });
    alert('Информация о профиле успешно обновлена');
  };

  const logout = () => {
    AsyncStorage.removeItem('token').then(() => {
      console.log('token removed');
    });
    AsyncStorage.removeItem('login').then(() => {
      console.log('login removed');
    });
    navigation.navigate('AuthScreen');
  };

  const avatarStyle = {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  };

  const avatarContainerStyle = {
    marginVertical: 10,
    height: 60,
    width: 60,
  };

  return (
    <>
      <View style={{flexDirection: 'column', flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Header />
        </View>

        <View style={{justifyContent: 'flex-start', flex: 5}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: '700'}}>
              Настройки профиля
            </Text>
          </View>
          <View style={{paddingHorizontal: 20}}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>
              Фотография вашего профиля
            </Text>

            <View style={avatarContainerStyle}>
              <Image
                style={avatarStyle}
                source={{
                  uri: avatarUrl,
                }}
              />
            </View>

            <View>
              <Text>Как к вам обращаться?</Text>
              <TextInput value={name} style={{height: 25}} />
            </View>

            <View>
              <Text>Укажите ваш контактный телефон</Text>
              <TextInput
                autoCompleteType={'tel'}
                value={phone}
                style={{height: 25}}
                keyboardType={'phone-pad'}
              />
            </View>
            <View>
              <Text>На какой срок вы планируете арендовать жилье?</Text>
              <TextInput value={duration} style={{height: 25}} />
            </View>

            <View>
              <Text>Сколько человек будет проживать в квартире?</Text>
              <TextInput value={peopleLimit} style={{height: 25}} />
            </View>

            <View style={{flexDirection: 'row'}}>
              <MyCheckbox
                props={{
                  checked: animalAllowance,
                  setChecked: setAnimalAllowance,
                }}
              />
              <Text style={{paddingVertical: 8}}>
                Со мной будут проживать животные
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <RadioButton
                disabled={!animalAllowance}
                value="large"
                status={animalType === 'large' ? 'checked' : 'unchecked'}
                onPress={() => setAnimalType('large')}
              />
              <Text style={{fontSize: 10, paddingVertical: 10}}>
                У меня крупное животное
              </Text>
              <RadioButton
                disabled={!animalAllowance}
                value="small"
                status={animalType === 'small' ? 'checked' : 'unchecked'}
                onPress={() => setAnimalType('small')}
              />
              <Text style={{fontSize: 10, paddingVertical: 10}}>
                У меня мелкое животное
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <MyCheckbox
                props={{
                  checked: kidsAllowance,
                  setChecked: setKidsAllowance,
                }}
              />
              <Text style={{paddingVertical: 8}}>Со мной будут жить дети</Text>
            </View>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <TouchableOpacity onPress={updateProfileInfo}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#000000',
                    paddingVertical: 8,
                  }}>
                  Сохранить изменения
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={logout}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '300',
                    color: '#7E7C7C',
                    paddingVertical: 8,
                  }}>
                  Выйти из профиля
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default SettingsTab;
