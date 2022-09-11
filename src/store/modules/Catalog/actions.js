import axios from "axios";

// let urlCatalogItem =  {"items": [{"type": [{"id": "434b4185-9d48-414d-a5d6-7c42ab0f723b", "title": "Стеллаж"},  {"id": "1313f11d-24d3-48fd-b9e6-c80d827c3c14", "title": "Профиль"}],
// "category":  [{"id": "434b4185-9d48-414d-a5d6-7c42ab0f723b", "title": "Металлический"},  {"id": "1313f11d-24d3-48fd-b9e6-c80d827c3c14", "title": "Деревянный"}], 
// "searchstring": ""}]}


let urlCatalog = 'https://03f0ce2f-1a05-4a2d-a628-8fdaef600ef1.mock.pstmn.io/products'
let urlFilters = 'https://0c1afc9d-add2-41fe-97b5-4533d72057ee.mock.pstmn.io/productsFilters'

function getRequestData(commit, requestUrl, requestParams, requestCondition, storeAction) {
 
   return new Promise((resolve, reject) => {
      let loaded = undefined;
   
      axios.get(requestUrl, requestParams).then(response => {
         if(eval(requestCondition)){
            commit(storeAction, response.data)
            loaded = true
         }else{
            loaded = false
         }
         resolve(loaded) 
         })
      .catch(error => {
         reject(error);
         });       
      });
}

export default {
   getCatalogData({commit}, {params, needClean}) {

      if(needClean){
         commit('ERASE_CATALOG_STATE')
      }

      let requestParams = {
         params: params
      };

      return getRequestData(commit, urlCatalog, requestParams, 'response.data.length', 'SET_CATALOG_TO_STATE');
   },

   getCatalogFilters({commit}) {
      return getRequestData(commit, urlFilters, undefined, 'Object.keys(response.data).length', 'SET_CATALOG_FILTERS_TO_STATE');
   },
   setCartData({commit}, data){
      commit("SET_CART_DATA_TO_STORE", data)
   },

};



