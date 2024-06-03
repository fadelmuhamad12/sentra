import { combineReducers } from "redux"
import authReducer from "./Auth/authReducer"
import authFalseReducer from './Auth/authFalseReducer'
import listProductReducer from "./Product/listProductReducer"
import detailProductReducer from './Product/detailProductReducer'
import cartReducer from "./AddToCart/AddToCartReducer"
import searchReducer from "./Search/SearchReducer"


export default combineReducers({
  authReducer,
  authFalseReducer,

  product: combineReducers({
    list: listProductReducer,
    detail: detailProductReducer,
    addToCart: cartReducer,
    search: searchReducer
  })

})