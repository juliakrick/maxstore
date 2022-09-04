export default{
    SET_AUTH:(state, payload)=>{
            state.auth = payload
    },

    LoginRequest(state) {
        state.status = 'loading';
        
    },

    LoginSuccess(state, user, token) {
        console.log('LoginSuccess')
        state.status = 'success'
        state.token = token
        state.user = user
    },

    LoginFailure(state) {
        state.status = 'error';
   
    },

    LogOut(state) {
        state.status = ''
        state.token = ''
    },

    RegisterRequest(state) {
        state.registStatus = 'loading';
    },

    RegisterSuccess(state, user, token) {
        state.status = 'success'
        state.token = token
        state.user = user
    },
    RegisterFailure(state) {
        state.registStatus = 'error';
    },

    setSendCatalogStatus(state, payload){
          state.getCatalogStatus = payload
    }


    



}