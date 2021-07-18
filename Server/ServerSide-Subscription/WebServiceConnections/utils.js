const dal = require('./DAL')
const moviesBl = require('../models/businessLogic/moviesBL')
const membersBl = require('../models/businessLogic/membersBL')

// using all the function on this file to
// get all the data we need
const updateDBwhenLode = async() =>{
    // check if there any saved info on the db
    let moviesInDB = await moviesBl.getAllMovies()
    let membersInDB = await membersBl.getAllMembers()

    if(moviesInDB.length === 0){// the movie collection is empty
        const movieData = await getAllMovise()
        insertToDataBase(movieData, moviesBl.addMovie)
    }
    if(membersInDB.length === 0){// the members collection is empty
        const membersData = await getAllMembers()
        insertToDataBase(membersData, membersBl.addMember)
    }
}

// using DAL leyer to get movies data 
const getAllMovise = async() =>{
    const data = await dal.getAll('https://api.tvmaze.com/shows')
    let newData = data.map(movie => {
        let newMovie =  {
            name: movie.name,
            genres: movie.genres,
            image:movie.image.medium,
            premiered:movie.premiered
        }
        return newMovie
    })
    return newData
}

// using the DAL leyer to get members
const getAllMembers = async() =>{
    const data = await dal.getAll('http://jsonplaceholder.typicode.com/users')
    let newData = data.map(user => {
        let filterdUser =  {
            name: user.name,
            email: user.email,
            city: user.address.city
        }
        return filterdUser
    })
    return newData
}

// generic function for runing cbf on every elementdata
const insertToDataBase = (dataArray, cbfunction)=>{
    dataArray.forEach(obj => {
        cbfunction(obj)
    });
}

// exporting only the function to use on lode DB
module.exports = {updateDBwhenLode}
