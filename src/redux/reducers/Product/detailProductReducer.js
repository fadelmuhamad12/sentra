const DETAIL_PRODDUCT = 'DETAIL_PRODUCT'
const DETAIL_PRODUCT_SUCCESS = 'DETAIL_PRODUCT_SUCCESS'
const DETAIL_PRODUCT_FAILED = 'DETAIL_PRODUCT_FAILED'
const UNMOUNT_DETAIL_PRODUCT = 'UNMOUNT_DETAIL_PRODUCT'


const initialState = {
  data: null,
  loading: true,
  message: null
}


const detailProductReducer = (state = initialState, action) => {
  switch(action.type) {
    case DETAIL_PRODDUCT:
      return {
        ...state,
        data: null,
        loading: true
      }
    case DETAIL_PRODUCT_SUCCESS: 
      return{
        ...state,
        data: action.payload.data,
        message:'Success',
        loading: false
      }
    case DETAIL_PRODUCT_FAILED:
      return{
        ...state,
        data: null,
        loading: true,
        message: 'FAILED'
      }
    case UNMOUNT_DETAIL_PRODUCT:
      return {
        ...state,
        data: null,
        loading: true
      }
      default:
        return state
    }
}

export default detailProductReducer