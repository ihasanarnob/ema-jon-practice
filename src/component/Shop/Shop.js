import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);


    useEffect( ()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    // add handler 
    const handleAdd = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart);
    }
    return (
        <div className="shop-container">

            {/* product Container */}
            <div className="product-container">
            <h2>products: {products.length} </h2>
            {
                products.map(product => <Product 
                    key = {product.key}
                product= {product} 
                handleAdd = {handleAdd}
                ></Product>)
            }
            </div>


            {/* cart container */}
            <div className="cart-container">
            <Cart
            cart = {cart}
            
            ></Cart>
            </div>
    
        </div>
    );
};

export default Shop;