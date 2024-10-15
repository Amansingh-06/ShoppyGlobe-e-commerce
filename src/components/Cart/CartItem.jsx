import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../Redux/cartSlice';
import CartItemStyle from './CartItem.module.css';

const CartItem = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    // Handle removing item from the cart
    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    // Handle incrementing quantity
    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    

    return (
        <div className={CartItemStyle.cart}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className={CartItemStyle.cart_card}>
                        <img src={item.thumbnail} alt="" style={{ width: 50, height: 50 }} />

                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}
                            <button onClick={() => handleIncrement(item.id)}>Add</button>
                        </p>

                     

                        <button onClick={() => handleRemoveFromCart(item.id)} className={CartItemStyle.removebtn}>
                            Remove
                        </button>
                    </div>
                ))
            )}
            <h3>Total Items: {totalQuantity}</h3>
        </div>
    );
};

export default CartItem;
