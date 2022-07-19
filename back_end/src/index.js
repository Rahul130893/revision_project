//const { application } = require("express")
const express = require("express")

const connect = require("./configs/db")
const productController= require("./controllers/product.controller")
const cartController =require("./controllers/cart.controller")
const app = express()
 
app.use(express.json())
app.use("/product", productController)
app.use("/cart", cartController)


app.listen(5000, async () => {
    try {
        await connect()
    } catch (error) {
        console.log(error)
    }
    console.log("listening on 5000")
})