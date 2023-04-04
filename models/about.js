var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    title: { type: 'String'}, 
}, { toJSON: { virtuals: true } });

module.exports = mongoose.model('about', aboutSchema);