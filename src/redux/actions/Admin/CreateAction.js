import axios from "axios";

export const createProductAction = (newProduct) => async(dispatch) => {
  await dispatch({ type: 'CREATE_PRODUCT' })
  return axios.post('http://localhost:2002/product', newProduct)
  .then((response) => {
    dispatch({
       type: 'CREATE_PRODUCT_SUCCESS',  
       payload: response?.data

      })
  }).catch((err) => {
    dispatch(err, dispatch({ type: 'CREATE_PRODUCT_FAILED' }))
  })
}