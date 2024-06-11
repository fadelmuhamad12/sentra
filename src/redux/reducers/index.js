import { combineReducers } from "redux"
import authReducer from "./Auth/authReducer"
import authFalseReducer from './Auth/authFalseReducer'
import listProductReducer from "./Product/listProductReducer"
import detailProductReducer from './Product/detailProductReducer'
import cartReducer from "./AddToCart/AddToCartReducer"
import searchReducer from "./Search/SearchReducer"
import loginReducer from './Auth/loginReducer'
import authChecked from "./Auth/AuthChecked"
import admin from './Auth/admin'


export default combineReducers({
  authReducer,
  authFalseReducer,
  loginReducer,
  authChecked,
  admin,

  product: combineReducers({
    list: listProductReducer,
    detail: detailProductReducer,
    addToCart: cartReducer,
    search: searchReducer
  })

})