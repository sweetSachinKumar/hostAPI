const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price must be privided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default:4.5
    },
    createAt: {
        type: Date,
        default: Date.now()
    }, 
    company: {
        type: String,
        enum: {
            values: ["apple", "sumsung", "dell", "mi"],
            message: `{value} is not supported.`
        }
    }
})


module.exports = mongoose.model("product", productSchema)
