require('./config/database')// database connection run imidately
const express = require('express')
const cors = require('cors')
const usersControllers = require('./controllers/usersControllers')
const usersJsonController = require('./controllers/usersJsonController')
const premissionController = require('./controllers/premissionControllers')
const subscriptionController = require('./controllers/SubscriptionControllers/subscriptionController')
const moviesController = require('./controllers/SubscriptionControllers/moviesController')
const memberController = require('./controllers/SubscriptionControllers/memberController')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


//call the subscrption server
app.use('/api/subscription', subscriptionController)
app.use('/api/movies', moviesController)
app.use('/api/members', memberController)

// call the user server (corrent)
app.use('/api/users', usersControllers)
app.use('/json/users', usersJsonController)
app.use('/json/premission', premissionController)
//app.use('/premission', )
app.listen(7000, console.log('users server is runing'))