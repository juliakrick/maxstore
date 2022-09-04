import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// const user = JSON.parse(localStorage.getItem('user'));



export default{  
        namespaced: true,
        token: localStorage.getItem('token'),
        status: '',
        registStatus:'',
        auth:{},
        getCatalogStatus: false,
        // registration:[],
        actions:actions,
        mutations:mutations,
        getters:getters,


}