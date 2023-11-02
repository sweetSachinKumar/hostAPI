require('dotenv').config()
const express = require("express")
const app = express()
const PORT =  process.env.PORT || 5000
const connectDB = require('./db/connect')

let cors = require("cors");
app.use(cors());


app.use(express.json())
app.use('/', require("./routes/Products"))

app.get('/apps', (req,res)=>{
    res.send("HI, I am live")
})


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