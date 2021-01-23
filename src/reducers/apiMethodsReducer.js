const INITIAL_STATE = {
  searchRange: 5,
  moneyLimit: 20000,
};

const apiMethodsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PROFILE_INFO':
      console.log('SET_PROFILE_INFO reducer');
      return {
        ...state,
        profileInfo: action.payload,
      };

    case 'SET_CHATS_LIST':
      console.log('SET_CHATS_LIST reducer');
      return {
        ...state,
        chatsList: action.payload,
      };

    case 'SET_MESSAGES_LIST':
      console.log('SET_MESSAGES_LIST reducer');
      return {
        ...state,
        messagesList: action.payload,
      };

    case 'SET_SEARCH_RESULT':
      console.log('SET_SEARCH_RESULT reducer');
      return {
        ...state,
        searchResult: action.payload,
      };

    case 'SET_PLACE_INFO':
      console.log('SET_PLACE_INFO reducer');
      return {
        ...state,
        placeInfo: action.payload,
      };

    default:
      return state;
  }
};

export default apiMethodsReducer;
