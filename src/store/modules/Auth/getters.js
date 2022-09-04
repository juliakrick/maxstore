import state from "./state"

export default{

    GET_AUTH(state){
        return state.user
    },

    GET_TOKEN(state){
        return state.token
    },

    GET_STATUS(){
        return state.status
    },


    GET_LOGIN_REQUEST(state){
        return state.user
    },

    GET_REGIST_STATUS(state){
        return state.registStatus
    }


 


}



   

    


 