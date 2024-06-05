import axios from "axios"

export const GET = (path, params) => {
  const header = {
    'Content-Type': 'application/json',
  }
    return new Promise((resolve, reject) => {
      axios.get(`${path}`, {
        headers: header,
        params
      }).then((response) => {
        if(response.status === 200) {
          return resolve(response?.data)
        }
        const error = response?.statusText
        return reject(error)
      }).catch((err) => {
        const error = err?.response?.data?.messages[0]?.message;
        return reject(error)
      })
    })
}

export const POST_AUTH = (path, payload) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  return axios
    .post(path, payload, { headers })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(response.statusText);
    })
    .catch((err) => {
      const error = err.response ? err.response.data : err.message;
      throw new Error(error);
    });
};