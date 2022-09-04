import axios from 'axios'
// import Vue from 'vue'
// Vue.prototype.$axios = axios;






let login_user = 'https://03f0ce2f-1a05-4a2d-a628-8fdaef600ef1.mock.pstmn.io/login'

let register_user = 'https://reqres.in/api/register'





export default {

    postLoginUser({commit}, user) {
        console.log('это юзерсccc', user)
        return new Promise((resolve, reject) => {
            commit('LoginRequest')

            axios.post( login_user,{
                name: user.name,
                email: user.email,
                password: user.password

            })
            .then(resp => {
              console.log('не ошибочка', resp)
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                commit('LoginSuccess', token, user)
                resolve(resp)
              })
              .catch(err => {
                console.log('ошибочка', err)
                commit('LoginFailure', err)
                localStorage.removeItem('token')
                reject(err)
              })

        })
  
      
     },


     postLogOutUser({commit}){
        localStorage.removeItem('user');
        commit('LogOut');

     },

     RegisterUser({commit}, user) {
        return new Promise((resolve, reject)=>{
            commit('RegisterRequest');
            console.log('eto user', user)
            axios.post(register_user, {
               params: user
            })
            .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                commit('RegisterSuccess', token, user)
                resolve(resp)
              })
              .catch(err => {
                commit('RegisterFailure', err)
                localStorage.removeItem('token')
                reject(err)
              })
        })
        

        
        // .then(
        //     user => {
        //     commit('registerSuccess', user);
        //     // router.push('/login');  поменять
        //     setTimeout(() => {
        //         // display success message after route change completes
        //         dispatch('alert/success', 'Registration successful', { root: true });
        //     })

        // },
           
        
    //     error =>{
    //     commit('RegisterFailure', error);
    //                 dispatch('alert/error', error, { root: true });

    //    }
        // )
  



     }


};

