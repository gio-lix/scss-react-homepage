import React from 'react';
import "./Cart.scss"
import "../Home.scss"

const Cart = ({cart}) => {
    return (
        <div className="featureCart__item">
            <div className="featureCart__icon">
                <img src={cart.Icon} alt="cart"/>
            </div>
            <div className="featureCart__title">{cart.title}</div>
            <div className="featureCart__description">
                {cart.desc}
            </div>
        </div>
    );
};

export default Cart;