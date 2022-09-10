export default{
    SET_CATALOG_TO_STATE:(state, payload)=>{
        if(state?.catalog){
            state.catalog = [...state.catalog, ...payload]
        }else{
            state.catalog = payload
        } 
    },
    SET_CATALOG_FILTERS_TO_STATE:(state, payload)=>{
        state.filterItems = payload
    },
    ERASE_CATALOG_STATE:(state)=>{
        state.catalog = []
    },
    SET_CART_DATA_TO_STORE:(state, payload)=>{
        state.cartData = payload
    },

}