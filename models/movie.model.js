import mongoose, {Schema} from "mongoose";
import Joi from "joi";

const movieschema = new Schema({
    Title:{
        type:String,
        required: true,
        unique:true,
        minlength:1,
        maximumlength:50
    },
    Desc:{
        type:String,
        required:true,
        minlength:5,
        maximumlength:255
    },
    Imdb:{
        type:Number,
        required:true,
        min:0,
        max:10
    }
});

export const Movie = mongoose.model('Movie',movieschema);

export const  movievalidate = (data) =>{
const schema = Joi.object({
    Title:Joi.string().min(1).max(50).required(),
    Desc:Joi.string().min(5).max(255).required(),
    Imdb: Joi.number().min(0).max(10).required()
});
 return schema.validate(data);
};

