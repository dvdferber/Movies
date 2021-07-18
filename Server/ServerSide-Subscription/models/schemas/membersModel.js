const mongoose = require('mongoose')


//let subscriptionSchema = new mongoose.schema
const membersSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
})
module.exports = mongoose.model('members', membersSchema)
