const User = require("../models/User");
const {
    verifyToken,
    verifyTokenAndAuthorization
} = require("./verifyToken");
const router = require("express").Router();

//UPDATE

router.put("/:id", verifyTokenAndAuthorization, (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        
    }
})

module.exports = router;