const express = require('express')
const movieDAL = require('D:/FS/FinalProject-Movies/Servers/ServerSide-Cinema/dataMenipulation/subscriptionDALs/MovieDAL.js')
const router = express.Router()

router.route('/').get(async(req, resp) => {
    let movies = await movieDAL.getAllmovies()
    return resp.json(movies)
})
router.route('/:id').get(async(req, resp) => {
    let movie = await movieDAL.getMovieByID(req.params.id)
    return resp.json(movie)
})
router.route('/:id').put(async(req, resp) => {
    let newArray = req.body
    let status = await movieDAL.updateMovie(req.params.id, newArray)
    return resp.json(status)
})
router.route('/:id').delete(async(req, resp) => {
    let status = await movieDAL.deleteMovieObj(req.params.id)
    return resp.json(status)
})
router.route('/').post(async(req, resp) => {
    let newMovie = req.body
    let status = await movieDAL.createNewMovie(newMovie)
    return resp.json(status)
})
module.exports = router