import { ADMIN } from "../../data"

export const admin = () => (dispatch) => {
  dispatch({type: 'ADMIN'})
  setTimeout(() => {
    if(ADMIN !== null) {
      dispatch({
        type: 'ADMIN_SUCCESS',
        payload: {
          data: ADMIN,
        }

      })
    } else {
      dispatch({ type: 'ADMIN_FAILED' })
    }
  }, 3000)
}