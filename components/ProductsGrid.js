import Product from "./Product"
import PropTypes from 'prop-types';
import productShape from '../prop-types/product'



const ProductGrid = (props)=>{
    return(
        <div className='product-grid'>
            {props.data.map(
                (product)=>{
                    return <Product 
                        key={product.id} // el key es la manera que react hace track de las listas 'cedula del objeto'
                        onAddButtonClick={props.onAddItem}
                        {...product} // el spread es para pasar todas las propiedades de objeto una a una para tenerlas disponibles dentro de produc.js
                        // brand={product.brand} 
                        // name={product.name}
                        // description={product.description}
                        // price={product.price}
                        // estas comentadas fueron reemplazadas por {...product}
                        
                    />
                }
            )}
        </div>
    )
}

ProductGrid.propTypes = {
    data: PropTypes.arrayOf(productShape),
    onAddItem: PropTypes.func
}



export default ProductGrid