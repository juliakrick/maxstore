export default{

    GET_CATALOG_TO_STATE(state){
        return state.catalog
    },


    GET_LAST_ID(state){
      return state?.catalog.length ? state.catalog[state.catalog.length-1]?.id : undefined
      
  },

  GET_FILTER_ITEMS(state){
    return state.filterItems
  },




    GET_PRODUCTS_ID: (state) => (id) => {
     
    return state.catalog.find(todo => todo.id === id)
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }


    // GET_PRODUCTS_ID(state){
    //     getTodoById: (state) => (id) => {
    //         return state.todos.find(todo => todo.id === id)
          }
        // return productsId => {
        //     return state.catalog.find(product => product.id === productsId)
        // }
    // },

    


 