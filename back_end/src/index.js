//const { application } = require("express")
const express = require("express")

const connect = require("./configs/db")
const productController= require("./controllers/product.controller")
const cartController =require("./controllers/cart.controller")
const userController = require("./controllers/user.controller")
const { register, login } = require("./controllers/auth.controller");

const app = express()
 
app.use(express.json())
app.use("/product", productController)
app.use("/cart", cartController)
app.use("/users", userController)
app.post("/register", register);

app.post("/login", login);


app.listen(5000, async () => {
    try {
        await connect()
         console.log("listening on 5000");
    } catch (error) {
        console.log(error)
    }
   
})