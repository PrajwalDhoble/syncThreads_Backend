const mongoose = require('mongoose')


module.exports = () => {
    return mongoose.connect('mongodb+srv://users:prajwal123@cluster0.ev4ku.mongodb.net/?retryWrites=true&w=majority')
}