const express = require("express");
const app = express();
const {products} = require("./data");

app.get("/",(req,res)=>{
    res.send("Hi, this is our home page.\nDo you want to see <a href='/products'>products</a>?");
    res.end()
})

app.get("/products",(req,res)=>{
    res.json(products);
    res.end()
})

app.get("/products/:productID",(req,res)=>{
    var prodId = req.params.productID;
    const singleProduct = products.find((prod)=>{
        if (prod.id === Number(prodId)){
            return prod;
        }
    })    
    if (!singleProduct){
        res.status(404).send("Product not found.")
    }
    res.send(singleProduct)
    res.end()
})

app.get("/products/product/search",(req,res)=>{
    const {search,limit} = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((prod)=>{
            return prod.name.includes(search)
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    res.send(sortedProducts)
    res.end()
})

app.listen("8000",()=>{
    console.log("app is working on http://localhost:8000");
})