const ADMIN =  "ADMIN"
const ADMIN_SUCCESS = "ADMIN_SUCCESS"
const ADMIN_FAILED = "ADMIN_FAILED"

const initialState = {
  data: [],
  message: null,
  loading: true,
  authed: false
}

const adminReducer = (state =  initialState, action) => {
  switch(action.type) {
    case ADMIN:
      return {
        ...state,
        data: null,
        loading: true,
        authed: false

      }
     case ADMIN_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        authed: true,
        loading: false,
        message: 'SUCCESS'
      }
    case ADMIN_FAILED:
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

export default adminReducer