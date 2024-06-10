const initialState = {
  userData: null,
  roles: [],
  authed: false,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      return {
        ...state,
        loading: true,
      };
    case 'AUTH_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        authed: true,
        userData: action.payload.data,
        roles: action.payload.roles,
      };
    case 'AUTH_USER_FAILED':
      return {
        ...state,
        loading: false,
        authed: false,
        userData: null,
        roles: [],
      };
    case 'SIGN_UP':
      return {
        ...state,
        loading: true,
      };
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        loading: false,
        authed: true,
        userData: action.payload.userData,
      };
    case 'SIGN_UP_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'LOGIN':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        authed: true,
        userData: action.payload.userData,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        loading: false,
        authed: false,
        error: action.error,
      };
    case 'LOGOUT':
      return {
        ...state,
        authed: false,
        userData: null,
        roles: [],
      };
    default:
      return state;
  }
};

export default authReducer;
