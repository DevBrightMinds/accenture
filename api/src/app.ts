import express, { Application } from "express";

import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());

// import the app routes
import Brands from "./Routes/Brands"; 

app.use("/Brands", Brands); // specify the ends poits

app.listen(5500); // we listen @ port 5500, to run the app, run npm start and you can access it on http://localhost:5500