// importing necessary module

import express, { Router } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from './route'


const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// created server 
const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server is runnnig on 8080");
});

// connecting to data base
const  MONGO_URL= "mongodb+srv://Developer866:Factorial@factorial.aw1nlmm.mongodb.net/"
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on("error",(error:Error)=>console.log(error))

// Routes 
app.use('/',router())

