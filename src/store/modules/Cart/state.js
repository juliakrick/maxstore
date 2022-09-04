import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// const user = JSON.parse(localStorage.getItem('user'));



export default{  
        namespaced: true,
       
        items: [],
        checkoutStatus: null,
        
        actions:actions,
        mutations:mutations,
        getters:getters,


}