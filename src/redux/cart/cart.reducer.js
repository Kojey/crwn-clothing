import CartActionTypes from './cart.types'
import {addItemToCart} from './cart.utils'

const INITIAL_SATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state=INITIAL_SATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem => 
                      cartItem.id === action.payload.id
                      ? {...cartItem, quantity: cartItem.quantity-1}
                      : {...cartItem})
                      .filter(cartItem => cartItem.quantity !== 0)
      }
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default cartReducer;