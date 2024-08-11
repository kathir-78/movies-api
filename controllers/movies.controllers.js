import express from 'express';


export const MovieIndex = (req, res) => {
    res.json({ msg: 'Welcome to movie api development' });
};

export const MovieCreate =(req, res)=>{
    res.send("adding the movies");
};

export const MovieUpdate = (req, res)=>{
    res.send("updating the movies");
};

export const MovieDelete = (req, res)=>{
    res.send("deleting the movies");
};
