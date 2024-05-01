const mongoose = require("mongoose");
const validator = require("validator");

const vendSchema = mongoose.Schema({
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

    shopname: {
        type: String,
        required: true
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
        type: String,
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
    },

    foodname: {
        type: String,
        required: true
    },

    fooddes: {
        type: String,
        required: true
    },

    tiffincharge: {
        type: Number,
        required: true
    }

    /* menu: [
         {
             foodname: {
                 type: String,
                 required: true
             },
 
             fooddes: {
                 type: String,
                 required: true
             },
 
             tiffincharge: {
                 type: Number,
                 required: true
             }
         }
     ]
 
     */
})


// Here we will create the collection
const Vender = mongoose.model("Vender", vendSchema);
module.exports = Vender;