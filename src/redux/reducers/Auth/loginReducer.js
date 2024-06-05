const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILED = 'LOGIN_FAILED'


const initialState = {
  authed: false,
  userData: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authed: action.payload.authed,
        userData: action.payload.userData,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        authed: false,
      };
    default:
      return state;
  }
};

export default authReducer;