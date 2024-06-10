import { combineReducers } from "redux"
import authReducer from "./Auth/authReducer"
import authFalseReducer from './Auth/authFalseReducer'
import listProductReducer from "./Product/listProductReducer"
import detailProductReducer from './Product/detailProductReducer'
import cartReducer from "./AddToCart/AddToCartReducer"
import searchReducer from "./Search/SearchReducer"
import loginReducer from './Auth/loginReducer'
import authChecked from "./Auth/AuthChecked"


export default combineReducers({
  authReducer,
  authFalseReducer,
  loginReducer,
  authChecked,

  product: combineReducers({
    list: listProductReducer,
    detail: detailProductReducer,
    addToCart: cartReducer,
    search: searchReducer
  })

})