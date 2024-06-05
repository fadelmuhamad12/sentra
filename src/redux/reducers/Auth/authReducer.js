const AUTH_USER =  "AUTH_USER"
const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS"
const AUTH_USER_FAILED = "AUTH_USER_FAILED"
const SIGN_UP = 'SIGN_UP'
const SIGN_UP_FAILED = 'SIGN_UP_FAILED'
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'

const initialState = {
  data: [],
  message: null,
  loading: true,
  authed: false,
}

const authReducer = (state =  initialState, action) => {
  switch(action.type){
    case AUTH_USER:
      return {
        ...state,
        loading: true,
      }
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        data : action.payload.data,
        loading : false,
        authed : true,
        message : "SUCCESS"
      }
    case AUTH_USER_FAILED:
      return {
        ...state,
        data : null,
        loading : false,
        authed : false,
        message : 'FAILED'
      }
    case SIGN_UP:
      return {
        ...state,
        loading: true
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        authed: true,
        userData: action.payload.userData
      }
    case SIGN_UP_FAILED:
      return {
        ...state,
        loading: false,
        authed: false
      }
    default:
      return state
  }
}

export default authReducer