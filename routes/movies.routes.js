import express, { Router } from "express";
import { MovieById, MovieCreate, MovieDelete, Moviefind, MovieUpdate } from "../controllers/movies.controllers.js";
import validateId from "../middleware/validate.js";
const router = express.Router();



// CRUD OPERATIONS 
router.get('/', Moviefind);

router.post('/',MovieCreate);

router.get('/:id',validateId,MovieById);

router.put('/:id',validateId,MovieUpdate);

router.delete('/:id',validateId,MovieDelete);

export default router;