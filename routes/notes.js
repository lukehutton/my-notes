const notesDb = require("../database/notes");

module.exports = app => {
  app.get("/api/notes", (req, res) => {
    const notes = notesDb.getAllNotes();
    res.send(notes);
  });

  app.delete("/api/notes/:id", (req, res) => {
    if (notesDb.deleteNote(req.params.id)) {
      res.send();
    } else {
      res.sendStatus(404);
    }
  });

  app.post("/api/notes", (req, res) => {
    const note = req.body;
    note.id = notesDb.createNote(req.body);
    res.send(note);
  });
};
