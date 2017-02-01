import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { listProducts } from '../actions';

import Loader from '../components/Loader.jsx';
import ProductGrid from '../components/ProductGrid.jsx';

const styles = {
    container: {
        height: '100%',
        maxWidth: 800,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        margin: '0 auto'
    }
};

@withRouter
@connect( mapStateToProps, { listProducts })
export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentWillMount() {
        this.props.listProducts();
    }

    render() {
        return (
            <div>
                <div style={styles.container}>
                    <Loader loading={this.props.loading}>
                        <ProductGrid products={this.props.products} />
                    </Loader>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.products,
        loading: state.products.isFetching
    };
}
