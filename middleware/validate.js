import {Movie}from "../models/movie.model.js"

const validateId = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id);
        console.log(movie);
        if (!movie) {
            return res.status(404).json({ "message": "Movie not found" });
        }
        next();
    } catch (error) {
        res.status(500).json({ "message": "Server error" });
    }
};

export default validateId;
