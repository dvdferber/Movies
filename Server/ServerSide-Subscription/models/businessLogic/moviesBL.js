const movie = require('../schemas/moviesModel')

const getAllMovies = () =>{
    return new Promise((resolve,reject) => {
        movie.find({}, (err, data)=>{
            if(err){reject(err)}
            else {resolve(data)}
        })
    })
}
const getMovieByID = (movieId) =>{
    return new Promise((resolve,reject) =>{
        movie.findById(movieId, (err, data) =>{
            if(err){reject(err)}
            else{resolve(data)}
        })
    })
}
const updateMovie = (movieId, movieToUpdate) =>{
    return new Promise((resolve,reject) =>{
        movie.findByIdAndUpdate(movieId, {
            name:movieToUpdate.name,
            genres:movieToUpdate.genres,
            image:movieToUpdate.image,
            premiered:movieToUpdate.premiered
        }, err =>{
            if(err){reject(err)}
            else{resolve(movieToUpdate)}
        })
    })
}
const addMovie = (newMovie) => {
    return new Promise((resolve,reject) => {
        let movieToAdd = new movie ({
            name:newMovie.name,
            genres:newMovie.genres,
            image:newMovie.image,
            premiered:newMovie.premiered
        })
        movieToAdd.save(err => {
            if(err){
                reject(err)
            }
            else{
                resolve(movieToAdd)
            }
        })
    })
}
const deleteMovie = (id) =>{
    return new Promise((resolve,reject) => {
        movie.findByIdAndDelete(id, err =>{
            if(err){reject(err)}
            else{resolve('the movie was deleted')}
        })
    })
}
module.exports = {addMovie, getAllMovies, getMovieByID, updateMovie, deleteMovie}
