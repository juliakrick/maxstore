import axios from "axios";

// let urlCatalogItem =  {"items": [{"type": [{"id": "434b4185-9d48-414d-a5d6-7c42ab0f723b", "title": "Стеллаж"},  {"id": "1313f11d-24d3-48fd-b9e6-c80d827c3c14", "title": "Профиль"}],
// "category":  [{"id": "434b4185-9d48-414d-a5d6-7c42ab0f723b", "title": "Металлический"},  {"id": "1313f11d-24d3-48fd-b9e6-c80d827c3c14", "title": "Деревянный"}], 
// "searchstring": ""}]}


let urlCatalog = 'https://03f0ce2f-1a05-4a2d-a628-8fdaef600ef1.mock.pstmn.io/products'
let urlFilters = 'https://0c1afc9d-add2-41fe-97b5-4533d72057ee.mock.pstmn.io/productsFilters'

// function getData(commit, requestUrl, requestParams, requestCondition, storeAction) {
 
//    return new Promise((resolve, reject) => {
//       let loaded = undefined;
   
//       axios.get(requestUrl, requestParams).then(response => {
//          if(eval(requestCondition)){
//             commit(storeAction, response.data)
//             loaded = true
//          }else{
//             loaded = false
//          }
//          resolve(loaded) 
//          })
//       .catch(error => {
//          reject(error);
//          });       
//       });
// }

export default {

   getActions({commit, getters}, payload) {

      let actualParams = {}
      if(getters?.GET_LAST_ID){
         actualParams.lastID = getters?.GET_LAST_ID
      }   
      for (var key in payload) {
         if(payload[key]){
            actualParams[key] = payload[key]
         }   
      }
      let queryParams = {
         params: actualParams
     };
 
      return new Promise( (resolve, reject) => {
      let loaded = undefined;
     
      axios.get( urlCatalog, queryParams).then(response => {
         if(response.data.length){
            commit('SET_CATALOG_TO_STATE', response.data)
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
   },

   getCatalogFilters({commit}) {
 
      return new Promise( (resolve, reject) => {
      let loaded = undefined;
     
      axios.get( urlFilters, {
          params: {
            //   lastID: getters?.GET_LAST_ID,
            //   categoryTitle: payload
          }
      }).then(response => {
         if(Object.keys(response.data).length){
            commit('SET_CATALOG_FILTERS_TO_STATE', response.data)
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
   },

   // getActions({commit, getters}, payload) {
 
   //    let requestParams = {
   //       'params': {
   //          lastID: getters?.GET_LAST_ID,
   //          categoryTitle: payload
   //       }
   //    };

   //    return this.getData(commit, urlCatalog, requestParams, 'response.data.length', 'SET_CATALOG_TO_STATE');
   // },

   // getCatalogFilters(commit, payload) {
   //    // let someThing1 = getters;
   //    // let someThing2 = payload;
   //    let requestParams = payload;

   //    return getData(commit, urlFilters, requestParams, 'Object.keys(response.data).length', 'SET_CATALOG_FILTERS_TO_STATE');
   // },


};



