const LIST_PRODDUCT = 'LIST_PRODUCT'
const LIST_PRODUCT_SUCCESS = 'LIST_PRODUCT_SUCCESS'
const LIST_PRODUCT_FAILED = 'LIST_PRODUCT_FAILED'
const UNMOUNT_LIST_PRODUCT = 'UNMOUNT_LIST_PRODUCT'


const initialState = {
  data: null,
  message: null,
  loading: false
}

const listProductReducer = (state = initialState, action) => {
  switch(action.type) {
    case LIST_PRODDUCT:
      return {
        ...state,
        data: null,
        loading: true
      }
    case LIST_PRODUCT_SUCCESS: 
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        message: 'SUCCESS'
      }
    case LIST_PRODUCT_FAILED:
      return {
        ...state,
        data: null,
        loading: true,
        message: 'FAILED'
      }
    case UNMOUNT_LIST_PRODUCT:
      return {
        ...state,
        data: null,
        loading: true
      }
    default: 
    return state
  }
}

export default listProductReducer