import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { addToCart } from '../actions';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        marginBottom: 16
    },
    info: {
        marginLeft: 16,
        padding: 16,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%'
    },
    title: {
        fontWeight: 500,
        fontSize: 18
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        padding: 8
    },
    overview: {
        color: 'gray',
        fontSize: 14
    }
};

@withRouter
@connect( undefined, { addToCart })
export default class ProductCard extends Component  {
    constructor(props) {
        super(props);

        this.handleAddtoCart = this.handleAddtoCart.bind(this);
    }

    handleAddtoCart() {
        this.props.addToCart(this.props._id);
    }

    render() {
        return (
                <Paper style={styles.container}>
                    <div style={styles.info}>
                        <div>
                            <h1 style={styles.title}>{this.props.title}</h1>
                            <img src={this.props.imagePath} />
                            <p style={styles.overview}>{this.props.description}</p>
                            <p style={styles.overview}>{this.props.price}</p>
                        </div>

                        <div>
                            <Divider />
                            <div style={styles.actions}>
                                    <FlatButton
                                        label="Add to shopping cart"
                                        onClick={this.handleAddtoCart}
                                    />
                            </div>
                        </div>
                    </div>
                </Paper>
            );
    }
}
