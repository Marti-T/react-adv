import { createContext, ReactElement, useContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
/* import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons'; */

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



/* interface ProductButtonsProps {
    increaseBy: ( value: number ) => void;
    counter: number;
} */



//export const ProductButtons = ({ increaseBy, counter }:ProductButtonsProps ) => {



export const ProductCard = ({ children, product }: ProductCardProps) => {

    //console.log(styles);

    const { counter, increaseBy } = useProduct();


    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }>
            
                {/* <ProductImage img={ product.img } />

                <ProductTitle title={ product.title } />

                <ProductButtons 
                    increaseBy={ increaseBy } 
                    counter={ counter }  
                /> */}

                { children }

            </div>
        </Provider>
    )
}


/* ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons; */