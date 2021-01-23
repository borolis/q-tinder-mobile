import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {SliderBox} from 'react-native-image-slider-box';

import BottomSheetHeader from '../Components/BottomSheetHeader';
import BottomSheetContent from '../Components/BottomSheetContent';
import searchResult from '../../mock/searchResult';
import axios from 'axios';
const SearchList = ({navigation}) => {
  const [currentPlaceId, setCurrentPlaceId] = useState(0);
  const [currentPlace, setCurrentPlace] = useState({
    owner: {
      name: '',
      avatar: '',
      phone: '',
    },
    place: {
      type: '',
      rooms: 1,
      distance: 1,
      price: 1,
      utilityBills: 3,
      deposit: 1,
      year: 1,
      floors: 1,
      images: [],
      comment: '',
      location: {
        latitude: 0,
        longitude: 0,
      },
    },
    allowance: {
      child: true,
      animals: {
        small: true,
        large: true,
      },
    },
  });
  const [placeImages, setPlaceImages] = useState([]);

  useEffect(() => {
    setCurrentPlace(searchResult[currentPlaceId]);

    // axios
    //   .get(
    //     'http://sevensem.switzerlandnorth.azurecontainer.io/v1/messages/getChats',
    //     {
    //       params: {
    //         login1: login,
    //       },
    //       headers: {
    //         Authorization: 'Bearer ' + props.route.params.token,
    //       },
    //     },
    //   )
    //   .then((res) => {
    //     dispatch(res.data);
    //   })
    //   .catch((err) => {
    //     // debugger
    //     console.log(err);
    //   });

    setPlaceImages(searchResult[currentPlaceId].place.images);
    // debugger;
  }, []);

  const bottomSheetContent = () => (
    <>
      <View style={{backgroundColor: 'white', borderRadius: 10}}>
        <View style={{flexDirection: 'row', paddingTop: 5}}>
          <View style={{flex: 4}} />
          <View
            style={{
              flex: 1,
              height: 6,
              backgroundColor: '#C4C4C4',
              borderRadius: 5,
            }}
          />
          <View style={{flex: 4}} />
        </View>

        <View
          style={{
            padding: 16,
            height: 750,
          }}>
          <BottomSheetHeader currentPlace={currentPlace} />
          <BottomSheetContent currentPlace={currentPlace} />
        </View>
      </View>
    </>
  );

  const sheetRef = useRef(null);

  return (
    <>
      <SliderBox sliderBoxHeight={510} images={placeImages} />

      <BottomSheet
        ref={sheetRef}
        snapPoints={[580, 400, 100]}
        initialSnap={2}
        borderRadius={10}
        enabledInnerScrolling={true}
        renderContent={bottomSheetContent}
      />
    </>
  );
};
export default SearchList;
