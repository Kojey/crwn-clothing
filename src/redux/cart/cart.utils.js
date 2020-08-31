export const addItemToCart = (cartItems, cardItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cardItemToAdd.id)
  if(existingCartItem){
    return cartItems.map((cartItem, index) => 
      cartItem.id === cardItemToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity+1}
        : {...cartItem}
    )
  } 
  return [...cartItems, {...cardItemToAdd, quantity: 1}]
}

// export const clearItemFromCart = (cartItems, cardItemToClear) => (
//   cartItems.filter(cartItem => cartItem.id !== cardItemToClear.id)
// )

// export const removeItemFromCart = (cartItems, cardItemToRemove) => (
//   cartItems.map(cartItem => 
//     cartItem.id == cardItemToRemove.id
//     ? {...cartItem, quantity: cartItem.quantity-1}
//     : {...cartItem})
// )
