const express = require('express')
const cors = require('cors')
const memberController = require('./controllers/memberController')
const movieController = require('./controllers/moviesController')
const subscriptionController = require('./controllers/subscriptionController')

const app = express()
require('./config/subscriptionsDB')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/api/members/', memberController)
app.use('/api/movies/', movieController)
app.use('/api/subscription' , subscriptionController)


app.listen(8000 ,()=>
 console.log('server is runnig'))