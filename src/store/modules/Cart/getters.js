import state from "./state"

console.log(state)

export default{
 
    GET_SHOPING_CART(state, getters, rootState){  
         return state.items.map(({ id, quantity }) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
              id: product.id,
              title: product.title,
              price: product.price,
              quantity
            }
          })

    },

    GET_CartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
          return total + product.price * product.quantity
        }, 0)
      }


}



   

    


 