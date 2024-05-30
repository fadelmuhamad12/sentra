import { combineReducers } from "redux"
import authReducer from "./authReducer"
import listProductReducer from "./Product/listProductReducer"
import detailProductReducer from './Product/detailProductReducer'


export default combineReducers({
  authReducer,

  product: combineReducers({
    list: listProductReducer,
    detail: detailProductReducer
  })

})