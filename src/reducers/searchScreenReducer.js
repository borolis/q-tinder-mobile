const INITIAL_STATE = {
  searchRange: 5,
  moneyLimit: 20000,
};

const searchScreenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RANGE':
      console.log('SET_SEARCH_RANGE reducer');
      return {
        ...state,
        searchRange: action.payload,
      };

    case 'SET_MONEY_LIMIT':
      console.log('SET_MONEY_LIMIT reducer');
      return {
        ...state,
        moneyLimit: action.payload,
      };

    default:
      return state;
  }
};

export default searchScreenReducer;
