const LOGOUT = 'LOGOUT'

const initialState = {
  authed: true,
  userData: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        authed: false,
        userData: null,
      };
    default:
      return state;
  }
};

export default authReducer;