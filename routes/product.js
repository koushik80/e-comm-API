const Product = require("../models/Product");


const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        
    } catch (err) {

    }

});






module.exports = router;