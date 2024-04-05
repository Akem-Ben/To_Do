import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan'
import {database} from './database/database';
import {HttpError} from 'http-errors';
import todoRouter from './routes/todoRoutes';

const app = express()


dotenv.config()

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(logger('dev'))
app.use('/todo', todoRouter)

//Database
database.sync({}).then( ()=>{
    console.log("Database is connected");
}).catch((err:HttpError)=>{
    console.log(err);
})


app.listen(process.env.Port, () => {
    console.log(`Server running on Port ${process.env.Port}`)
})

//BAckend: controller - route - app.ts - postman