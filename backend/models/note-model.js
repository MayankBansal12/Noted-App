const mongoose=require("mongoose");

const Schema=mongoose.Schema;
const noteSchema={
    title: String,
    content: String
}

const Note=mongoose.model("Note",noteSchema);
module.exports=Note;