import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}


//export const useProduct = ( onChange?: () => void ) => {
export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {
    
    const [ counter, setCounter ] = useState(value);
    //console.log({ value })

    const isControlled = useRef( !!onChange ); // Así tienemos isControlled con valor boolean

    const increaseBy = ( value: number ) => {

        //console.log("isControlled", isControlled.current);

        /* if( isControlled.current && onChange ) {
            return onChange({ count: value, product });
        } */

        if( isControlled.current ) {
            return onChange!({ count: value, product });
        }

        const newValue = Math.max( counter + value, 0);

        //setCounter( prev => Math.max( prev + value, 0));
        setCounter( newValue );

        onChange && onChange({ count: newValue, product }); // Es lo mimso que un if, no se va a ejecutar si onChange es falso
    }
    

    useEffect(() => {
      setCounter( value );
    }, [ value ])
    

    return {
        counter,
        increaseBy
    }

}
