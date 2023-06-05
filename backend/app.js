const express=require("express");
const cors=require("cors");
const port=8000||process.env.PORT;
const dotenv=require("dotenv");

const app=express();
dotenv.config();

const mongoose=require("mongoose");
// Connecting to database
mongoose.connect(process.env.ATLAS_URI);
mongoose.connection.once("open",()=>{
    console.log("Connected to the database!");
});

// Middlewares
app.use(cors());
app.use(express.json());


// Routes
const NoteRouter=require("./routes/note-router");
app.use("/",NoteRouter);

// Listening to port
app.listen(port,()=>{
    console.log("Server is running at",port);
})