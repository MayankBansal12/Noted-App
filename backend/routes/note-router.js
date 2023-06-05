const router = require("express").Router();
let Note = require("../models/note-model");

router
  .route("/note")
  .get((req, res) => {
    Note.find({})
      .then((notes) => {
        res.json(notes);
      })
      .catch((err) => res.status(400).json("Error in fetching the notes", err));
  })
  .post((req, res) => {
    let newNote = new Note({
      title: req.body.title,
      content: req.body.content,
    });
    newNote
      .save()
      .then(() => res.json("New Note Added!"))
      .catch((err) => res.status(400).json("Error in adding the note", err));
  });

  router.route("/note/:Id")
    .post((req,res)=>{
        Note.findByIdAndUpdate(req.params.Id)
        .then((note)=>{
            note.title=req.body.title,
            note.content=req.body.content

            note.save()
                .then(()=>res.json("Successfully updated!"))
                .catch((err) => res.status(400).json("Error in updating!", err));
        })
    })
    .delete((req, res) => {
        Note.findByIdAndDelete(req.params.Id)
        .then(() => {
            res.json("Succesfully Deleted!");
        })
        .catch((err) => res.status(400).json("Error in fetching the notes", err));
    });

module.exports = router;
