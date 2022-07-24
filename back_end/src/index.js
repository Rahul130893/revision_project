//const { application } = require("express")
const express = require("express")
const cors = require("cors")

const connect = require("./configs/db")
const productController= require("./controllers/product.controller")
const cartController =require("./controllers/cart.controller")
const userController = require("./controllers/user.controller")
const { register, login } = require("./controllers/auth.controller")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
 app.use(cors())
app.use(express.json())
app.use("/product", productController)
app.use("/cart", cartController)
app.use("/users", userController)
app.post("/register", register);

app.post("/login", login);

const port=process.env.PORT || 5000
app.listen(port, async () => {
    try {
        await connect()
         console.log(`listening on ${port}`);
    } catch (error) {
        console.log(error)
    }
   
})