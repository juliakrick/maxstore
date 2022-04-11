import axios from "axios";

export default {
  GET_PRODUCTS_FROM_API({commit}) {
    return axios('API', {
      method: "GET"
    })
      .then((catalog) => {
        commit('SET_CATALOG_TO_STATE', catalog.data);
        return catalog;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },
};

