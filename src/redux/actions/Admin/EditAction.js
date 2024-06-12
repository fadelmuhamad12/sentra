import axios from "axios";

export const editProductAction = (newProduct) => async(dispatch) => {
  await dispatch({ type: 'EDIT_PRODUCT' })
  return axios.post('http://localhost:2002/product', newProduct)
  .then((response) => {
    dispatch({
       type: 'EDIT_PRODUCT_SUCCESS',  
       payload: response?.data

      })
  }).catch((err) => {
    dispatch(err, dispatch({ type: 'EDIT_PRODUCT_FAILED' }))
  })
}