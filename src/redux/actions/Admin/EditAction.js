import axios from "axios";

export const editProductAction =(id, values, successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: "EDIT_PRODUCT" });
    return axios
      .put(`http://localhost:2002/product/${id}`, values)
      .then((response) => {
        successCB && successCB(response);
      })
      .catch((err) => {
        failedCB && failedCB(err);
      });
  };
