const SET_SEARCH_QUERY  = 'SET_SEARCH_QUERY';

const initialState = {
  query: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    // other cases
    default:
      return state;
  }
};

export default searchReducer;