const mongoose = require('mongoose')

const utils= require('../WebServiceConnections/utils')
mongoose.connect('mongodb://localhost:27017/SubscriptionDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

// inserting all the data by utils file
let db = mongoose.connection
db.once('open', async() =>{
    // the function run for all the data from API
    utils.updateDBwhenLode()
})
