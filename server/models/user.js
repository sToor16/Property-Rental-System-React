const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            min: [4, 'Too short'],
            max: [32, 'Too Long'],
            unique: true
        },
        email: {
            type:String,
            min: [4, 'Too short'],
            max: [32, 'Too Long'],
            unique: true,
            lowercase: true,
            required: 'Email is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        },
        password: {
            type: String,
            min: [4, 'Too short'],
            max: [32, 'Too Long'],
            required: 'Password is required',

        },
        properties: [{type: Schema.Types.ObjectId, ref: 'Property'}]
    }
);

module.exports = mongoose.model('User', userSchema);