import express, { Router } from "express";
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from "../controllers/movies.controllers.js";
const router = express.Router();



// CRUD OPERATIONS 
router.get('/', MovieIndex);

router.post('/',MovieCreate);

router.put('/:id',MovieUpdate);

router.delete('/:id',MovieDelete);

export default router;