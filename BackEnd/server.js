import { config } from "dotenv";
import exp from "express";
import {connect} from "mongoose";
import {userApp} from "./APIs/userApi.js";
import cors from "cors";
config();


const App = exp();
// add cors
const allowedOrigins = process.env.FRONTEND_URL
  ? [process.env.FRONTEND_URL, 'http://localhost:5173']
  : ['http://localhost:5173'];

App.use(cors({ origin: allowedOrigins }));
// json parser
App.use(exp.json());


// routing api
App.use("/user-api",userApp);

const Connection = async() => {
    try{
        await connect(process.env.DB_URL) ;
        console.log("Db connected successfully");
        App.listen(process.env.PORT,()=>console.log(`listening on port ${process.env.PORT}`));
    }catch(err){
        console.log(err.message);
    }
}

Connection();



// error handling middleware
App.use((err, req, res, next) => {
  console.log(err)
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});