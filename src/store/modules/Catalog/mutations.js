export default{
    SET_CATALOG_TO_STATE:(state, catalog)=>{
        if(state?.catalog){
            state.catalog = [...state.catalog, ...catalog,]
        }else{
            state.catalog = catalog
        } 
    },
     
    SET_FILTER_CATALOG:(state, payload)=>{
            state.filterItems = payload
     
    },


}