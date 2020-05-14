import React, { useContext } from 'react';
import CartContext from './cartContext';

const AppContext: React.FC = () => {
  const { products } = useContext(CartContext);

  return (
    <ul>
      
    </ul>
  );
}

export default AppContext;