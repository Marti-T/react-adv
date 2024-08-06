import { createContext, ReactElement, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';

import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    //onChange?: ( product: Product, count: number ) => void;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}


export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    //console.log(styles);

    const { counter, increaseBy } = useProduct({ onChange, product, value }); //Sintaxis ECMA Script 6
    /* const { counter, increaseBy } = useProduct({ 
        onChange: () => {},
        product: product
    }); */


    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={ style }
            >
                {children}
            </div>
        </Provider>
    )
}