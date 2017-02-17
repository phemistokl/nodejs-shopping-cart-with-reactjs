const mongoose = require("mongoose");

const config = require('../../backend/etc/config.json');

require('../models/Product');
require('../models/User');
require('../models/Cart');

const Product = mongoose.model('Product');
const User = mongoose.model('User');

function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

// function listProducts(id) {
//     return Product.find(function(err, docs) {
//         const productChunks = [];
//         const chunkSize = 3;
//         for (var i = 0; i < docs.length; i += chunkSize) {
//             productChunks.push(docs.slice(i, i + chunkSize));
//         }
//     });
// }
function listProducts(id) {
    return Product.find();
}

function addToCart(productId) {
    const cart = new Cart(req.session.cart ? req.session.cart : {});

    return Product.findById(productId, function(err, product) {
        if (err) {
            console.log("Error of Albert", err);
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log("Session of Albert",req.session.cart);
        res.redirect('/');
    });
}

function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

function deleteNote(id) {
    return Note.findById(id).remove();
}

module.exports = {
    setUpConnection,
    listProducts,
    addToCart,
    createNote,
    deleteNote
};
