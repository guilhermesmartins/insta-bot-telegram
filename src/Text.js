const mongoose = require('mongoose');

const textSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: false,
        default: 'unknow author'
      },
      used: {
        type: Boolean,
        required: true,
        default: false,
      }
}, {
    timestamps: true,
},);

const Text = mongoose.model('texts', textSchema);

module.exports = Text;