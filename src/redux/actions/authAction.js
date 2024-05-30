import { AUTH_USER } from '../data'

export const authAction = () => (dispatch) => {
  dispatch({ type: 'AUTH_USER' })
  setTimeout(() => {
    if (AUTH_USER !== null) {
      dispatch({
        type: 'AUTH_USER_SUCCESS',
        payload: {
          data: AUTH_USER,
        }
      })
    } else {
      dispatch({ type: 'AUTH_USER_FAILED' })
    }
  }, 3000)
}