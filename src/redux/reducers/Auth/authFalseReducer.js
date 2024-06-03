const AUTH_USER_FALSE =  "AUTH_USER_FALSE"
const AUTH_USER_FALSE_SUCCESS = "AUTH_USER_FALSE_SUCCESS"
const AUTH_USER_FALSE_FAILED = "AUTH_USER_FALSE_FAILED"

const initialState = {
  data: [],
  message: null,
  loading: true,
  authed: false
}

const authFalseReducer = (state =  initialState, action) => {
  switch(action.type) {
    case AUTH_USER_FALSE:
      return {
        ...state,
        data: null,
        loading: true,
        authed: false

      }
     case AUTH_USER_FALSE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        authed: false,
        loading: false,
        message: 'SUCCESS'
      }
    case AUTH_USER_FALSE_FAILED:
      return {
        ...state,
        data: null,
        authed: true,
        loading: true,
        message: 'FAILED'
      }
     default:
      return state
  }
}

export default authFalseReducer