import React, { Component } from 'react';

import ProductCard from './ProductCard.jsx';

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16,
    }
};

export default props => {
    const { products } = props;

    return (
        <div style={styles.container}>
            {
                products.length !== 0
                ? products.map(product => <ProductCard key={product._id} {...product} />)
                : <p>No products to display</p>
            }
        </div>
    );
}
