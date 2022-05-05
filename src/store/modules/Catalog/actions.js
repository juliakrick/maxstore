import axios from "axios";

export default {
  GET_PRODUCTS_FROM_API({commit}) {
    return axios('https://82f98400-5359-4254-94ca-9292951fe033.mock.pstmn.io/catalog', {
      method: "GET"
    })
      .then((catalog) => {
        commit('SET_CATALOG_TO_STATE', catalog.data);
        console.log(catalog)
        return catalog.data;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },
};

