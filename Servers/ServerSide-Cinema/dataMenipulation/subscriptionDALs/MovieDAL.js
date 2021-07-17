const utiles = require('./utiles')

const moviesURL = 'http://localhost:8000/api/movies'


const getAllmovies = async() =>{
    let respond = await utiles.getAll(moviesURL)
    return respond
}

const getMovieByID = async(id) =>{
    let respond = await utiles.getByID(id, moviesURL)
    return respond
}

const updateMovie = async(id, obj) =>{
    let respond = await utiles.updateExsist(id, moviesURL, obj)
    return respond
}

const deleteMovieObj = async(id) =>{
    let respond = await utiles.deleteObj(id, moviesURL)
    return respond
}


const createNewMovie = async(newMovie) =>{
    let respond = await utiles.createNew(moviesURL, newMovie)
    return respond
}

module.exports = {getAllmovies, getMovieByID, updateMovie, deleteMovieObj, createNewMovie}
