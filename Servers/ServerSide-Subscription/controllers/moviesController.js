const express = require('express')
const movieBL = require('../models/businessLogic/moviesBL')
const router = express.Router()


router.route('/').get(async (req, resp) => {
    let allMovise = await movieBL.getAllMovies()
    return resp.json(allMovise)
})
router.route('/:id').put(async (req, resp) =>{
    let movieToUpdate = req.body
    let respond = await movieBL.updateMovie(req.params.id, movieToUpdate)
    return resp.json(respond)

})

router.route('/:id').get(async(req, resp)=>{
    let movieId = req.params.id
    let movie = await movieBL.getMovieByID(movieId)
    return resp.json(movie)
})
router.route('/').post(async (req, resp) => {
    let newMovie = req.body
    let newMovieStatus = await movieBL.addMovie(newMovie)
    return resp.json(newMovieStatus)
})
router.route('/:id').delete(async (req, resp)=>{
    let respond = await movieBL.deleteMovie(req.params.id)
    return resp.json(respond)
})

module.exports = router ;