import React, { useReducer, ReactNodeArray } from 'react';

interface ICart {
  products: string[]
  shipping_value?: number;
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppReducer: React.FC = () => {
  const Cart = useReducer(
    (state: ICart, action: CartActionType) => {
      switch(action.type) {
        case 'ADD_PRODUCT': 
          return {
            ...state,
            products: [...state.products, 'Produto novo']
          }
        default:
          return state;
      }
    },
    {
      products: [],
      shipping_value: 0,
    },
  );

  return(
    <ul></ul>
  );
}

export default AppReducer;