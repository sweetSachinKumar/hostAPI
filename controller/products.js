const Product = require("../models/product")

// get all data using query 
const getAllProductsTesting = async (req, res)=>{
    const {company,name,featured,sort,select } = req.query
    const querySearch = {}

    if(company){
        querySearch.company = company 
    }
    if(name){
        querySearch.name =  { $regex: name , $options: 'i' } 
    }
    if(featured){
        querySearch.featured = featured
    }

  

    let myQuery =  Product.find(querySearch)

    if(sort){
        const sortFix = sort.replace(",", " ")
        myQuery = myQuery.sort(sortFix)
    }
    if(select){
        const selectFix = select.split(",").join(" ")
        // const selectFix = select.replace(",", " ")
        myQuery = myQuery.select(selectFix)
    }

    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 2

    let skip = (page - 1) * limit

    myQuery = myQuery.skip(skip).limit(limit)


    const myData = await myQuery



    res.status(200).json(myData)

    console.log(req.query)
}

 

const getAllProducts = async (req, res)=>{
    const fetchData = await Product.find({}).limit(3)
    res.status(200).json({fetchData})
}

module.exports = {getAllProducts, getAllProductsTesting}