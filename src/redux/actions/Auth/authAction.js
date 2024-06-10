import jwt from "jsonwebtoken";
import { API } from "../../../config";

export const authAction = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const decodedUserData = jwt.decode(token);
    dispatch({
      type: "AUTH_USER_SUCCESS",
      payload: {
        data: decodedUserData,
        roles: decodedUserData.role,
      },
    });
  } else {
    dispatch({ type: "AUTH_USER_FAILED" });
  }
};

export const signUpAction = (userData) => async (dispatch) => {
  dispatch({ type: "SIGN_UP" });
  try {
    const response = await API.POST_AUTH(
      "http://localhost:2002/signup",
      userData
    );
    const token = response.token;
    const decodedUserData = jwt.decode(token);
    localStorage.setItem("token", token);
    dispatch({
      type: "SIGN_UP_SUCCESS",
      payload: {
        userData: decodedUserData,
      },
    });
  } catch (error) {
    dispatch({ type: "SIGN_UP_FAILED" });
    throw error;
  }
};

export const loginAction =
  (values, successCB, failedCB) => async (dispatch) => {
    const payload = {
      username: values.username,
      password: values.password,
    };

    await dispatch({ type: "LOGIN" });

    return API.POST_AUTH("http://localhost:2002/login", payload)
      .then((response) => {
        const token = response.token;
        const userData = jwt.decode(token);
        localStorage.setItem("token", token);

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { userData, authed: true },
        });

        return successCB && successCB();
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_FAILED" });
        return (
          failedCB &&
          failedCB(err.response ? err.response.data.error : err.message)
        );
      });
  };

export const logoutAction = (successCB, failedCB) => (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    return successCB && successCB();
  } catch (error) {
    return failedCB && failedCB();
  }
};
