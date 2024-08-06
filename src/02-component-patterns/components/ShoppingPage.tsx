import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';
import { products } from '../data/products';



export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          {/* <ProductCard 
            product={ product1 }
            className="bg-dark text-white"
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-bold" title={'Hola Mundo'} />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard> */}


            {/* <ProductCard 
              product={ product }
              style={{
                backgroundColor: '#70D1F8'
              }}
          >
            <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,.2)' }} />
            <ProductTitle style={{ fontWeight: 'bold' }} />
            <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} 
            />
          </ProductCard> */}

          <div>
            {
              products.map( product => (
                <ProductCard 
                    product={ product }
                    className="bg-dark text-white"
                    key={ product.id }
                    onChange={ onProductCountChange }
                    value={ shoppingCart[product.id]?.count || 0 }
                >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,.2)' }} />
                  <ProductTitle className="text-bold" title={''} />
                  <ProductButtons className="custom-buttons" />
                </ProductCard>
              ))
            }
          </div>
          

          <div className="shopping-cart">
            {
              Object.entries( shoppingCart ).map( ([ key, product ]) => (
                <ProductCard 
                  key={key}
                  product={ product }
                  className="bg-dark text-white"
                  style={{ width: '100px' }}
                  value={ product.count }
                  onChange={ onProductCountChange }
                >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,.2)' }} />
                  {/* <ProductTitle title={ `${product.count}` } /> */}
                  <ProductButtons 
                    className="custom-buttons"
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  />
                </ProductCard>
              ))
            }
          </div>


            {/* <div>
              <code>
                { JSON.stringify(shoppingCart, null, 5)}
              </code>
            </div> */}

        </div>
    </div>
  )
}
