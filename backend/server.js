import express, { urlencoded } from "express";
import dotenv from 'dotenv';
import goalRoutes from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import colors from 'colors';
import connectDB from './config/db.js'
import cors from 'cors';
dotenv.config();

const port=process.env.PORT || 1903;
const app=express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//routes
app.use("/api/goals",goalRoutes);
app.use("/api/users",userRoutes);

app.use(errorHandler)

app.listen(port,()=>{
    connectDB();
    console.log(`Server started on port ${port}`)
});

