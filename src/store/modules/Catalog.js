import axios from 'axios'
// import Vue from 'vue'
// Vue.use( axios)
const url = 'https://82f98400-5359-4254-94ca-9292951fe033.mock.pstmn.io/catalog'

export default {
    actions:{
        GET_PRODUCTS_FROM_API(commit) {
            axios
            .get(url)
            .then((response) => {
                commit('SET_CATALOG_TO_STATE', response.data);
                return response;
              })
              .catch((error) => {
                console.log(error)
                return error;
              })
          },
        

        
    mutations:{
        SET_CATALOG_TO_STATE(state, products){
                state.catalog = products
        
            }
        },
        
        state:{
            Catalog:[]
        },

        getters:{
            GET_CATALOG_TO_STATE:(state)=>{
                return state.catalog
        
            }
        }

    }
   
  };