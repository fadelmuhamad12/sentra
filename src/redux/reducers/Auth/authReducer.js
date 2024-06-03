const AUTH_USER =  "AUTH_USER"
const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS"
const AUTH_USER_FAILED = "AUTH_USER_FAILED"

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
    default:
      return state
  }
}

export default authReducer