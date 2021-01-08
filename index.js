var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  
  cart = c;
  return cart;
}

function addToCart(item) {
  let hash = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 101) 
  }

  cart.push(hash) 
  return `${item} has been added to your cart.`
  
 // write your code here
}

function viewCart() {

  if(cart.length === 1){

  }else if(cart.length > 1){

  }else{
    return 'Your shopping cart is empty.'
  }
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
