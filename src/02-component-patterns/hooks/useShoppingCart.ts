import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';



export const useShoppingCart = () => {
  
    // 84. Estado del carrito de compras
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        //console.log('onProductCountChange', count, product);
        /*shoppingCart[ product.id ] = { ...product, count } Esto es una mala práctica porque estoy mutando el estado directamente, no hayq eu hacerlo así */

        setShoppingCart( oldShoppingCart => {

        const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

        // Quiero el valor máximo de los dos
        if( Math.max( productInCart.count + count, 0) ) {
            //productInCart.count += 20;
            productInCart.count += count;
            return {
            ...oldShoppingCart,
            [product.id]: productInCart
            } 
        }


        // Borrar el producto
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        //return {...rest};
        return rest;

        // Es totalmente correcto, el que no está comentado es opcional
            /* if( count === 0 ) {
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
            }

            return {
            ...oldShoppingCart,
            [ product.id ]: { ...product, count }
            } */
        });

    }

    return {
        shoppingCart,
        onProductCountChange
    }

}
