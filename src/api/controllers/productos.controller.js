const Productos = require("../models/productos.model");

const getProductos = async(req, res) => {
    try {
        const allProductos = await Productos.find().populate("alergias", "name");
        return res.status(200).json(allProductos);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getProductosById = async(req,res) => {
    try {
        const {id} = req.params;
        const producto = await Productos.findById(id);
        return res.status(200).json(producto);
    } catch (error) {
        return res.status(500).json(error);
    }
}

getProductosByBarcode = async(req, res) => {
    try {
        const {barCode} = req.params;
        const producto = await Productos.findOne({barcode: barCode});
        return res.status(200).json(producto);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getProductos, getProductosById};