const mongoose = require("mongoose");

const config = require('../../backend/etc/config.json');

require('../models/Product');

const Product = mongoose.model('Product');

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
    createNote,
    deleteNote
};
