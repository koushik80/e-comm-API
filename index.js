const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const cors = require("cors");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnection Successful!"))
    .catch((err) => {
        console.log(err);
    });



app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);


app.listen(process.env.PORT || 8000, () => {
    console.log("Backend server is on fire!");
});