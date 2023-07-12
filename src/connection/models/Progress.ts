import mongoose from "mongoose";


const ProgressSchema = new mongoose.Schema
(
    {
        nickname : String,
        password : String,
        time_game : Number,
        lifes : Number,
        score : Number,
        level : Number,
        experience : Number,
        coins : Number,
        power1 : Number,
        power2 : Number,
        life : Number,
        stamina : Number,
        shield : Number,
        armor : Number
    }
);

const ProgressModel = mongoose.model('ProgressModel', ProgressSchema);
export default ProgressModel;
