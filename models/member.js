var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    member_id: { type: 'String'},
    fname: {type: 'String'},
    lname: {type: 'String'},
    mname: {type: 'String'},
}, { toJSON: { virtuals: true } });

module.exports = mongoose.model('member', memberSchema);