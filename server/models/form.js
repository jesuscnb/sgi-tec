var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formSchima = new Schema({
    key: String,
    label: String,
    name: String,
    type: String,
    required: Boolean,
    placeholder:String,
    order: Number
});

module.exports = mongoose.model('forms', formSchima);


