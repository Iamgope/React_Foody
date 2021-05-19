import React,{useReducer} from 'react'
import CartContext from './Cart-context';

const defaultCartState={
items:[],
totalAmount:0,
}

const CartReducer=(state,action)=>{
  if(action.type==='ADD'){
      const UpdatedItems=state.items.concat(action.item);
      const UpdatedAmount=state.totalAmount+action.item.amount*action.item.price;
      return{
          items:UpdatedItems,
          totalAmount:UpdatedAmount,
      }
  }
    return defaultCartState;

}
const CartProvider=(props)=>{


const [CartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState);

const addItemToCartHandler=(item)=>{
dispatchCartAction({
    type:'ADD',
    item:item
})
}
const removeItemToCartHandler=(id)=>{

}

const cartContext={
    items:CartState.items,
    totalAmount:CartState.totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemToCartHandler,
};

return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;