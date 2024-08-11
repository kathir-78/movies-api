import express, { Router } from "express";
const router = express.Router();



// CRUD OPERATIONS 
router.get('/', (req, res)=>{
    res.json({msg:'Welcome to movie api development'});
});

router.post('/',(req, res)=>{

});

router.put('/:id',(req, res)=>{

});

router.delete('/:id',(req, res)=>{

});

export default router;