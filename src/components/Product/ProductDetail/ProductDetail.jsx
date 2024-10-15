import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';
import ProductDetailStyle from './ProductDetail.module.css';
import { Watch,Grid } from 'react-loader-spinner';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isImageLoading, setIsImageLoading] = useState(true); // Track image loading state
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err));
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleImageLoad = () => {
        setIsImageLoading(false); // Hide image loader once the image is loaded
    };

    const handleImageError = () => {
        setIsImageLoading(false); // Hide loader in case of image load failure
    };

    if (!product)
        return (
            <div className={ProductDetailStyle.loader_Wrapper}>
                <Watch
                    visible={true}
                    height="120"
                    width="120"
                    radius="48"
                    color="#4fa94d"
                    ariaLabel="watch-loading"
                    className={ProductDetailStyle.loader}
                />
            </div>
        );

    return (
        <div className={ProductDetailStyle.product_detail}>
            <div className={ProductDetailStyle.img_wrapper}>
                {isImageLoading && (
                    <div className={ProductDetailStyle.loader}>
                        <Grid
                            visible={true}
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="grid-loading"
                            radius="12.5"
                            wrapperStyle={{}}
                            wrapperClass="grid-wrapper"
                        />
                    </div>
                )}
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{ display: isImageLoading ? 'none' : 'block' }} // Hide the image until it's loaded
                    

                />
            </div>

            <div className={ProductDetailStyle.detail_info}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;
