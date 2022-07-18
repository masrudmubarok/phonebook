import express from "express";
import cors from "cors";
import ContactRoute from "./routes/ContactRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ContactRoute);

app.listen(5000, ()=> console.log("Server is running.."));