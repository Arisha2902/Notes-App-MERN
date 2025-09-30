// const express = require("express")
import express from "express";
import cors from"cors"
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";


dotenv.config();
// console.log(process.env.monogo_url); 

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

// connectDB();

// middleware
if(process.env.NODE_ENV !== "production"){


app.use(
    cors({
        origin: "http://localhost:5173",
    })
)
app.use(express.json())
app.use(rateLimiter)

}
// simple middleware
// app.use((req,res,next) => {
//     console.log("we just got a new req")
//     console.log(`${req.method} & url is ${req.url}`)
//     next();
// })

if(process.env.NODE_ENV === "production"){
    
app.use("/api/notes", notesRoutes);


app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get("*" ,(req,res) => {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})
}

// app.get("/api/notes" , (req,res) => {
// res.send("you got your notes there");
// });

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("server has started on port :" , PORT);
});
});


// app.listen(5000, () => {
//     console.log("server has started on port :" , PORT);
// })