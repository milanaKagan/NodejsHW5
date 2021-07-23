// emp-repo.js
const connectedKnex = require('./knex-connector');

function getAllProducts() {
    return connectedKnex('PRODUCTS').select('*');
}

function getProductById(id) {
    return connectedKnex('PRODUCTS').select('*').where('id', id).first();
}

function addProduct(product) {
    return connectedKnex("PRODUCTS").insert(product);
}

function updateProduct(product, id) {
    return connectedKnex("PRODUCTS").where('id', id).update(product);
}

function deleteProduct(id) {
    return connectedKnex("PRODUCTS").where('id', id).del()
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}