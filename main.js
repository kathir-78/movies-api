import express from "express";
const app= express();
import movies from "./routes/movies-routes.js";

// middleware

app.use('/',movies);

console.log("Starting server...");
const PORT = process.env.PORT || 1313;
app.listen(PORT,()=>{
    console.log(`The server is running on http://localhost/${PORT}`);
});