import * as React from 'react';
import {
  Button,
  Checkbox,
  RadioButton,
} from 'react-native-paper';
import {Text, View, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';


const SortParams = () => {
  const [sortDirection, setSortDirection] = useState('ASC')
  const [sortParameter, setSortParameter] = useState('RANGE')

  return (
    <View style={{alignItems: 'center', paddingTop: 0}}>
      <Text style={{fontSize: 14, fontWeight: '400', paddingBottom: 5}}>
        Сортировка
      </Text>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, paddingLeft: 30, alignItems: 'flex-start'}}>

          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="RANGE"
              status={sortParameter === 'RANGE' ? 'checked' : 'unchecked'}
              onPress={() => setSortParameter('RANGE')}
            />
            <Text style={{paddingTop: 10, fontSize: 12}}>По удаленности от точки</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="PRICE"
              status={sortParameter === 'PRICE' ? 'checked' : 'unchecked'}
              onPress={() => setSortParameter('PRICE')}
            />
            <Text style={{paddingTop: 10, fontSize: 12}}>По цене</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="UPDATE"
              status={sortParameter === 'UPDATE' ? 'checked' : 'unchecked'}
              onPress={() => setSortParameter('UPDATE')}
            />
            <Text style={{paddingTop: 10, fontSize: 12}}>По дате обновления</Text>
          </View>

        </View>



        <View style={{flex: 1, alignItems: 'flex-start', paddingLeft: 10}}>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="ASC"
              status={sortDirection === 'ASC' ? 'checked' : 'unchecked'}
              onPress={() => setSortDirection('ASC')}
            />
            <Text style={{paddingTop: 10, fontSize: 12}}>По возрастанию</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="DESC"
              status={sortDirection === 'DESC' ? 'checked' : 'unchecked'}
              onPress={() => setSortDirection('DESC')}
            />
            <Text style={{paddingTop: 10, fontSize: 12}}>По убыванию</Text>
          </View>

        </View>
      </View>


    </View>
  )
};
export default SortParams;
