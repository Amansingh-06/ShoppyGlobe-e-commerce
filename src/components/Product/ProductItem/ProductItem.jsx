import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';
import { Link } from 'react-router-dom';
import ProductItemStyle from './Product.module.css';
import { Grid } from 'react-loader-spinner'; // Import the loader

const ProductItem = ({ product}) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true); // State to track image loading

    const handleAddToCart = () => {
        dispatch(addToCart(product));
       
    };

    const handleImageLoad = () => {
        setIsLoading(false); // Set loading to false once the image has loaded
    };

    const handleImageError = () => {
        setIsLoading(false); // Hide loader if image fails to load
    };

    return (
        <div className={ProductItemStyle.product_item}>
            {/* Loader will show until image is loaded */}
            {isLoading && (
                <div className={ProductItemStyle.loader}>
                    <Grid
                        visible={true}
                        height="80"
                        width="80"
                        color="rgb(68, 174, 232)"
                        ariaLabel="grid-loading"
                        radius="12.5"
                        wrapperStyle={{}}
                        wrapperClass="grid-wrapper"
                    />
                </div>
            )}

            {/* Image Element */}
            <img
                src={product.thumbnail}
                alt={product.title}
                className={ProductItemStyle.img}
                onLoad={handleImageLoad} // Hide loader when the image loads
                onError={handleImageError} // Hide loader on error
                style={{ display: isLoading ? 'none' : 'block' }} // Hide image while loading
                
                
            />

            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <Link to={`/product/${product.id}`} className={ProductItemStyle.viewbtn}>View Details</Link>

            <button className={ProductItemStyle.cartbtn} onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem;
