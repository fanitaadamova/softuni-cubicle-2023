const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
    },
})

userShema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new mongoose.MongooseError('Password missmatch')
        }

    })

const User = mongoose.model('User', userShema);

module.exports = User;