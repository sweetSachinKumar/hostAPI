const express = require('express')
const router = express.Router()
const Productss = require("../models/product")
const {getAllProducts, getAllProductsTesting} = require('../controller/products')


router.route('/testing').get(getAllProducts)
router.route('/').get(getAllProductsTesting)


// toadd data 
router.get("/adddata", async (req, res)=> {
    let addedData = await Productss.create(req.body)
    console.log(addedData)
    res.json({success:true, addedData})
    

}) 


module.exports = router