const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        require: true,
        validate(value){
            const allowList = ['HIGH','LOW','MEDUIM'];
            if (!allowList.includes(value)) throw new Error("Invalid priority! Please enter HIGH, LOW or MEDUIM")
        }
    },
    dateAdded:{
        type:Date,
        delete: Date.now
    },
    dateUpdated:{
        type: Date,
        delete:Date.now
    }
});
// Save model in 'Note' variable
const Note = mongoose.model('Note',noteSchema);
module.exports = Note
