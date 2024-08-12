import express from "express";
const app= express();
import movies from "./routes/movies.routes.js";
import  connectDB from "./lib/db.js";

// middleware

connectDB();
app.get('/', (req,res)=>{
    res.json({msg:"welcome to the movie api development"});
})
app.use('/movies',movies);

console.log("Starting server...");
const PORT = process.env.PORT || 1313;
app.listen(PORT,()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
});