import * as React from 'react';
import {Checkbox, RadioButton} from 'react-native-paper';
import {Text, View} from 'react-native';
import MyCheckbox from './MyCheckbox';
import {useEffect, useState} from 'react';

import {setSearchRange} from '../../actions/searchScreenAction';

const Accommodations = () => {
  const [animalSize, setAnimalSize] = React.useState('large');
  const [animalAllowance, setAnimalAllowance] = React.useState(false);

  useEffect(() => {
    console.log(animalAllowance);
  }, [animalAllowance]);

  const [kidsAllowance, setKidsAllowance] = React.useState(false);
  return (
    <>
      <View style={{alignItems: 'center', paddingTop: 0}}>
        <Text style={{fontSize: 14, fontWeight: '400', paddingBottom: 5}}>
          Условия проживания
        </Text>
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
        <MyCheckbox
          props={{
            checked: animalAllowance,
            setChecked: setAnimalAllowance,
          }}
        />
        <Text style={{fontSize: 12, paddingTop: 10}}>Можно с животными</Text>
      </View>

      {animalAllowance ? (
        <>
          <View style={{paddingHorizontal: 50, flexDirection: 'row'}}>
            <RadioButton
              value="large"
              status={animalSize === 'large' ? 'checked' : 'unchecked'}
              onPress={() => setAnimalSize('large')}
            />
            <Text style={{paddingTop: 10, fontSize: 12}}>Крупные животные</Text>
          </View>

          <View style={{paddingHorizontal: 50, flexDirection: 'row'}}>
            <RadioButton
              value="small"
              status={animalSize === 'small' ? 'checked' : 'unchecked'}
              onPress={() => setAnimalSize('small')}
            />
            <Text style={{paddingTop: 10, fontSize: 12}}>Мелкие животные</Text>
          </View>
        </>
      ) : (
        <></>
      )}

      <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
        <MyCheckbox
          props={{
            checked: kidsAllowance,
            setChecked: setKidsAllowance,
          }}
        />
        <Text style={{fontSize: 12, paddingTop: 10}}>Можно с детьми</Text>
      </View>
    </>
  );
};
export default Accommodations;
