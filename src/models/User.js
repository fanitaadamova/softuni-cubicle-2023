const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is requered!'],
        minLength: [5, 'Username is too short!'],
        match: [/^[A-Za-z0-9]+$/, 'Username must be alphanimeric'],
        unique: {
            value: true,
            message: 'Username already exists',
        },
    },
    password: {
        type: String,
        required: [true, 'Password is requered!'],
        validate: {
            validator: function (value) {
                return /^[A-Za-z0-9]+$/.test(value);
            },
            message: 'Invalid password charecters!'
        },
        minLength: 8,
    },
})


userShema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new Error('Password missmatch')
        }

    })

userShema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userShema);

module.exports = User;