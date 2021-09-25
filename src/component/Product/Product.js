import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name,price,seller,stock,img} = props.product
    return (
        <div className="product">
            <div>
            <img src= {img} alt="" />
            </div>
            <div>
            <p className="product-name">Name: {name}</p>
            <p> <small> by: {seller}</small></p>
            <p>Price: {price}</p>
            <p> <small> only left in stock: {stock}</small></p>
            <button onClick = { ()=> props.handleAdd(props.product)}
            className="btn-style"
            > {<FontAwesomeIcon icon={faShoppingCart} />} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;