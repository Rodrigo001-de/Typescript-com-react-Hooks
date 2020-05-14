import { createContext } from 'react';

interface IProduct {
    id: number;
    name: string;
    price: number;
}

interface ICart {
    products: IProduct[]
    shipping_value?: number;
}

const CartContext = createContext<ICart>({
    products: [],
    shipping_value: 0,
});

export default CartContext;