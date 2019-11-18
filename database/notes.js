const uuidv1 = require("uuid/v1");

const notes = {};

createNote = note => {
  const insertedId = uuidv1();
  notes[insertedId] = note;
  return insertedId;
};

deleteNote = id => {
  if (!(id in notes)) {
    return false;
  }
  delete notes[id];
  return true;
};

getAllNotes = () => {
  return Object.values(notes);
};

module.exports = {
  createNote,
  deleteNote,
  getAllNotes
};
