import React,{useReducer} from 'react'
import CartContext from './Cart-context';

const defaultCartState={
items:[],
totalAmount:0,
}

const CartReducer=(state,action)=>{
  if(action.type==='ADD'){
      //const UpdatedItems=state.items.concat(action.item);
      const UpdatedAmount=state.totalAmount+action.item.amount*action.item.price;

      const existingIndex=state.items.findIndex(
       item=>(item.id===action.item.id)
      );
     const existingItem=state.items[existingIndex];
    let UpdatedItems;
     if(existingItem){
        console.log("pehle se hai!!")

      const UpdatedItem={
          ...existingItem,
          amount:existingItem.amount+action.item.amount
      }
      UpdatedItems=[...state.items];
      UpdatedItems[existingIndex]=UpdatedItem;

     }

     else{
        console.log("pehle se nai hai!!")

     UpdatedItems=state.items.concat(action.item);
     }

      return{
          items:UpdatedItems,
          totalAmount:UpdatedAmount,
      }
  }
  if(action.type==='REMOVE'){
    const existingIndex=state.items.findIndex(item=>item.id===action.id);

    const existingItem=state.items[existingIndex];
    let UpdatedItems;
    const UpdatedAmount=state.totalAmount-existingItem.price;
    if(existingItem.amount===1){
      UpdatedItems=state.items.filter(item=>item.id!==action.id)

    }
    else{
      const Amount=existingItem.amount-1;
      const UpdatedItem={...existingItem,amount:Amount};
      UpdatedItems=[...state.items];
      UpdatedItems[existingIndex]=UpdatedItem;
    }

    return {
        items:UpdatedItems,
        totalAmount:UpdatedAmount
    }

  }
  if (action.type === 'CLEAR') {
    return defaultCartState;
  }



    return defaultCartState;

}
const CartProvider=(props)=>{


const [CartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState);

const addItemToCartHandler=(item)=>{
dispatchCartAction({
    type:'ADD',
    item:item,
})

}
const clearCartHandler = () => {
    dispatchCartAction({type: 'CLEAR'});
  };

const removeItemToCartHandler=(id)=>{
    dispatchCartAction({
        type:'REMOVE',
        id:id,
    })
}

const cartContext={
    items:CartState.items,
    totalAmount:CartState.totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemToCartHandler,
    clearCart: clearCartHandler
};

return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;