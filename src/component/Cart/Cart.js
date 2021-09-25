import React, { useReducer } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const totalReducer = (prev,product)=> prev + product.price;
    const total = cart.reduce(totalReducer,0);
    const shipping = 15;
    const tax = (total + shipping) * 0.1;
    const grandTotal = total+shipping+tax;
      
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Added : {cart.length} </h5>
            <p>price: {total.toFixed(2)} </p>
            <p>Shipping : {shipping} </p>
            <p>Tax: {tax.toFixed(2)} </p>
            <p>Total Price : {grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;