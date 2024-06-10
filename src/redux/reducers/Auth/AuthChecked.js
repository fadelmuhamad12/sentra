const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS";
const AUTH_USER_FAILED = "AUTH_USER_FAILED";

const initialState = {
  message: null,
  loading: true,
  authed: false,
};

const authChecked = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        authed: true,
        userData: action.payload.data,
      };
    }
    case AUTH_USER_FAILED: {
      return {
        ...state,
        data: null,
        loading: false,
        authed: false,
        message: "FAILED",
      };
    }
    default: 
    return state
  }
};


export default authChecked