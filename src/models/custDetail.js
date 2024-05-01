const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },

    phone: {
        type: Number,
        required: true,
        min: 10
    },

    address: {
        type: String,
        required: true,

    },

    city: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    email: {
        type:String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email id");
            }
        }
    },


    password: {
        type: String,
        required: true
    }
})


// Here we will create the collection
const Customer = mongoose.model("Customer", userSchema);
module.exports = Customer;    