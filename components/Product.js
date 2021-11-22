import getFormattedPrice from '../utils/getFormattedPrice'
import PropTypes from 'prop-types';
import { shape as productShape } from '../prop-types/product';
import Image from 'next/image';


const Product = (props)=>{
    const onClick = ()=> props.onAddButtonClick(props.id)  
    return (
        <div className="product">
            <h3>{props.brand}</h3>
            <h2>{props.name}</h2>
            <Image 
                src={props.photos[0]} 
                alt={props.name}
                width={250}
                height={250}
            />
            <p>{props.description}</p>
            <h3>{getFormattedPrice.format(props.price)}</h3>
            <button className="add-button" onClick={onClick}>Add to kart</button>
        </div>
    )
}

Product.propTypes = {
    onAddButtonClick: PropTypes.func,
    ...productShape

}

export default Product