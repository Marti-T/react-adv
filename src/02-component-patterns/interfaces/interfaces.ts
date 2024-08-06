//import { ReactElement } from 'react';
import { Props as ProductoCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonProps } from '../components/ProductButtons';

/* export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[] ;
} */


export interface Product {
    id: string;
    title: string;
    img?: string;
}


export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}


export interface ProductCardHOCProps {
    ({ children, product }:ProductoCardProps ): JSX.Element,
    //Title: ({ title }: { title?: string }) => JSX.Element,
    //Image: ({ img }: { img?: string }) => JSX.Element,
    //Buttons: ({ className }: { className?: string }) => JSX.Element
    
    /* Title: ( Props: { title?: string, className?: string }) => JSX.Element,
    Image: ( Props: { img?: string, className?: string }) => JSX.Element,
    Buttons: ( Props: { className?: string }) => JSX.Element */

    Title:   ( Props: ProductTitleProps ) => JSX.Element,
    Image:   ( Props: ProductImageProps ) => JSX.Element,
    Buttons: ( Props: ProductButtonProps ) => JSX.Element
}



export interface onChangeArgs {
    product: Product;
    count: number
}


// 84. Estado del carrito de compras
export interface ProductInCart extends Product {
    count: number;
}