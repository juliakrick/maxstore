import axios from "axios";

// import state from './state'
// import getters from './getters'


// let urlCatalog = 'http://localhost:3000/posts'

let urlCatalogItem =  {"items": [{"type": [{"id": "434b4185-9d48-414d-a5d6-7c42ab0f723b", "title": "Стеллаж"},  {"id": "1313f11d-24d3-48fd-b9e6-c80d827c3c14", "title": "Профиль"}],
"category":  [{"id": "434b4185-9d48-414d-a5d6-7c42ab0f723b", "title": "Металлический"},  {"id": "1313f11d-24d3-48fd-b9e6-c80d827c3c14", "title": "Деревянный"}], 
"searchstring": ""}]}


let urlCatalog = 'https://03f0ce2f-1a05-4a2d-a628-8fdaef600ef1.mock.pstmn.io/products'


export default {


   getFilterCatalog({commit}){
     
      const getFilterData = () => new Promise( (resolve) => {  
  
        setTimeout(() =>{
         resolve(urlCatalogItem)
        })    

   // конец getFilterCatalog   
  } );

  getFilterData().then(data => {
   console.log('data', data.items[0].category[0].title)
   commit('SET_FILTER_CATALOG', data.items[0].category[0].title)
 })
    
   },


   getActions({commit, getters}, payload) {
     console.log('геттер', getters)
      return new Promise( (resolve, reject) => {
      let loaded = undefined;
     
      axios.get( urlCatalog,{
          params: {
              lastID: getters?.GET_LAST_ID,
              categoryTitle: payload
          }
      })
   

      .then(response => {
        
         if(response.data.length){
            // console.log('response', response.data)
            // let bjh = response.data[response.data.length - 1].id
            // console.log('response length', bjh)
            // commit('SET_LAST_ID', response.data[response.data.length - 1])
            commit('SET_CATALOG_TO_STATE', response.data)
           
            loaded = true
        
         }else{
            loaded = false
         }
            
            resolve(loaded) 
            console.log('loaded', loaded )  
          })
          .catch(error => {
              reject(error);
          });
        
  } );
  
    
   }


};

