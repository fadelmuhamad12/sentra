import { API } from '../../../config'

export const unmountListProductAction = () => (dispatch) => {
  dispatch({ type: 'UNMOUNT_LIST_PRODUCT' })
}

export const listProductAction = () => async (dispatch) => {
  await dispatch({ type: 'LIST_PRODDUCT'})
  return API.GET('http://localhost:2002/product').then((response) => {
    dispatch({
      type: 'LIST_PRODUCT_SUCCESS',
      payload: {
        data: response.data
      }
    })
  }).catch((err) => {
    dispatch(err, dispatch({ type: 'LIST_PRODUCT_FAILED' }))
  })
}