const User = require("../models/User");
const {
    verifyToken,
    verifyTokenAndAuthorization
} = require("./verifyToken");
const router = require("express").Router();

//UPDATE

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
        
    }
});

module.exports = router;