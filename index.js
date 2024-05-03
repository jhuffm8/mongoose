import express from "express";
import mongoose from "mongoose";
import db from "./db/conn.js"
import 'dotenv/config'
import planetRoutes from './routes/planets.js'

const PORT = 5000;
const app = express()

app.use(express.json());
app.use('/planets', planetRoutes)





try{
app.listen(PORT, () => {
    console.log(`${PORT} is listening to ya!`)
})
} catch(err){
    console.log(err)
}