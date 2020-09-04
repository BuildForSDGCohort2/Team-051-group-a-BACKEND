const {
    Schema,
    model,
} = require('mongoose');


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    isLive: {
        type: Boolean,
        required: true,
        default: true
    }
});

userSchema.pre('save', function (next) {
    const user = this;
    if (user.isModified('password')) {
        //   Encrypt password here
    } else {
        next()
    }
})

const User = model('user', userSchema)

module.exports = User