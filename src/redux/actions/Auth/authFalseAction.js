import { AUTH_FALSE } from "../../data";


export const authUserFalse = () => (dispatch) => {
  dispatch({type: 'AUTH_USER_FALSE'})
  setTimeout(() => {
    if(AUTH_FALSE !== null) {
      dispatch({
        type: 'AUTH_USER_FALSE_SUCCESS',
        payload: {
          data: AUTH_FALSE,
        }

      })
    } else {
      dispatch({ type: 'AUTH_USER_FALSE_FAILED' })
    }
  }, 3000)
}