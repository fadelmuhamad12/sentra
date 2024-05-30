import { API } from '../../../config'

export const unmountDetailProduct = () => (dispatch) => {
  dispatch({type: 'UNMOUNT_DETAIL_PRODUCT'})
}


export const detailProductAction = (id) => async (dispatch) => {
  await dispatch({type: 'DETAIL_PRODUCT'})
  return API.GET(`http://localhost:2002/product/${id}`)
  .then((response) => {
    dispatch({
      type: 'DETAIL_PRODUCT_SUCCESS',
      payload: {
        data: response?.data
      }
    })
  }).catch((err) => {
    dispatch(err, dispatch({type:'DETAIL_PRODUCT_FAILED'}))
  })
}