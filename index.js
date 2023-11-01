require('dotenv').config()
const express = require("express")
const app = express()
const PORT =  process.env.PORT || 5000
const connectDB = require('./db/connect')

let cors = require("cors");
app.use(cors());


app.get('/', (req,res)=>{
    res.send("HI, I am live")
})
app.use(express.json())
app.use('/api/product', require("./routes/Products"))


const start = async ()=> {
    try{
        app.listen(PORT, ()=>{
            console.log(PORT,"Port is running now")
        })
        await connectDB(process.env.MONGODB_URL)
    }catch (error){
        console.log(error)
    }
}

start()