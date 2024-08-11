import express from "express";

const app= express();


// CRUD OPERATIONS 

app.get('/', (req, res)=>{
    res.json({msg:'Welcome to movie api development'});
});


app.post('/movies',(req, res)=>{


});

app.put('/movies/:id',(req, res)=>{

});

app.delete('/movies/:id',(req, res)=>{

});

console.log("Starting server...");
const PORT = process.env.PORT || 1313;
app.listen(PORT,()=>{
    console.log(`The server is running on ${PORT}`);
});
console.log("This should log after the server starts listening.");
