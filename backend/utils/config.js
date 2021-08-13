require('dotenv').config();

const config = {
    app: {
        PORT: process.env.PORT
    },
    db: {
        MONGODB_URI: process.env.MONGODB_URI,
    }
}

module.exports = config;