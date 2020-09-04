const mongoose = require('mongoose');


function createDBConnection() {
    const DBURL = process.env.MONGODB_URL || ""
    mongoose.connect(DBURL, {
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err, res) => {
            if (err) {
                console.log(err.message)
                return console.log("You need to set the db connection string in your environment file")
            }
            console.log("DB connected successfully!")
        })
}

module.exports = createDBConnection