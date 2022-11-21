const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required'],
        minLength: [3, 'name must have more than three characters'],
        unique: [true, 'name must be unique']
    },
    type: {
        type: String,
        required: [true, 'type required'],
        minLength: [3, 'type must have more than three characters']
    },
    description: {
        type: String,
        required: [true, 'description required'],
        minLength: [3, 'description must have more than three characters']
    },
    skill1: {
        type: String,
        minLength: [3, 'skill 1 must have more than three characters']
    },
    skill2: {
        type: String,
        minLength: [3, 'skill 2 must have more than three characters']
    },
    skill3: {
        type: String,
        minLength: [3, 'skill 3 must have more than three characters']
    },
    likes: {
        type: Number,
        default: 0
    }
    
});

module.exports = mongoose.model('Pet', PetSchema);