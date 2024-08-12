import {Movie,movievalidate} from "../models/movie.model.js"


export const Moviefind = async(req, res) => {
    try{
        const movie = await Movie.find();
        res.status(200).json(movie);
    }
    catch(error){
        res.status(404).json(error.message);
    }
};

export const MovieById = async(req, res) => {
    try{
        const movie = await Movie.findOne({_id:req.params.id});
        res.status(200).json(movie);
    }
    catch(error){
        res.status(404).json({error:error.message});
    }
};


export const MovieCreate =  async (req, res)=>{

    const {error} = movievalidate(req.body);

    if (error) {
        return res.status(400).send({ error: error.details[0].message });
    }

    const movie = new Movie({
        Title:req.body.Title,
        Desc:req.body.Desc,
        Imdb:req.body.Imdb
    });

    try{  
        const savedMovie = await movie.save();
        res.status(200).json(savedMovie);
    }
    catch(error)
    {
        res.status(400).json({error:error.message});
    }
};

export const MovieUpdate = async (req, res)=>{
    try{
        const updatedmovie = await Movie.findByIdAndUpdate(req.params.id,
            {
                Title:req.body.Title,
                Desc:req.body.Desc,
                Imdb: req.body.Imdb,
            },
            {new :true});
        res.status(201).json(updatedmovie);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
};


export const MovieDelete = async(req, res)=>{
    try{
        const deletedmovie = await Movie.findByIdAndDelete({_id:req.params.id});
        res.status(200).json(deletedmovie);
    }
    catch{
        res.status(400).json({error:error.message});
    }
};
