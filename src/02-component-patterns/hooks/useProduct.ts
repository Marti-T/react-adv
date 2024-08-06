import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}


//export const useProduct = ( onChange?: () => void ) => {
export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {
    
    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );    
    const isMounted = useRef(false);
    
    console.log(initialValues?.count); //Se muestra 2 veces porque la primera vez se ejecuta el useEffect y luego como el value se modifica se vuelva a mostrar

    //console.log(initialValues?.maxCount);

    const increaseBy = ( value: number ) => {

        let newValue = Math.max( counter + value, 0);

        if( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount )
        }

        setCounter( newValue );
        onChange && onChange({ count: newValue, product }); // Es lo mimso que un if, no se va a ejecutar si onChange es falso
    }


    const reset = () => {
        setCounter( initialValues?.count || value );
    }
    

    useEffect(() => {
        if ( !isMounted.current ) return;
        setCounter( initialValues?.count|| value );
    }, [ value ])


    useEffect(() => {
        isMounted.current = true;
    }, [])

    

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }

}
