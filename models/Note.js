const mongoose = require("mongoose");
// Creating the schema class using mongoose's schema method
const Schema = mongoose.Schema;
const noteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: {
    type: Date,
    default: Date.now
  },
  noteText: String
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
