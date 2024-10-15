import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import ProductListStyle from "./ProductList.module.css";
import { Watch } from 'react-loader-spinner';
import Header from '../../Header/Header';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetching products
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.error(err));
    }, []);

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (products.length === 0) {
        return (
            <div className={ProductListStyle.loader}>
                <Watch
                    visible={true}
                    height="120"
                    width="120"
                    radius="48"
                    color=" rgb(68, 174, 232)"
                    ariaLabel="watch-loading"
                />
            </div>
        );
    }

    return (
        <>
            {/* Pass the products and setSearchTerm function to the Header */}
            <Header setSearchTerm={setSearchTerm} productCount={filteredProducts.length} />

            <div className={ProductListStyle.product_wrapper}>
                <div className={ProductListStyle.product_list}>
                    {/* If no products match the search term, display "Oops!" */}
                    {filteredProducts.length === 0 ? (
                        <div className={ProductListStyle.no_products}>
                            <h2>Oops! No products found.</h2>
                        </div>
                    ) : (
                        filteredProducts.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))
                    )}
                </div>
            </div>
            
        </>
    );
};

export default ProductList;
