const AUTH_USER = 'AUTH_USER'
const AUTH_USER_FAILED = 'AUTH_USER_FAILED'
const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS'

const initialState = {
  data: [],
  message: null,
  loading: true,
}


const authReducer = (state = initialState, action) => {
  switch(action.type){
    case AUTH_USER:
      return {
        ...state,
        data: null,
        loading: true,
      }
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        message: 'SUCCESS'
      }
    case AUTH_USER_FAILED:
      return {
        ...state,
        data: null,
        loading: true,
        message: 'FAILED'
      }
    default: 
    return state
  }
}

export default authReducer