const {
    Schema,
    model
} = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    description: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('User', userSchema);