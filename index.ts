import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import ProgressController from "./src/connection/controllers/ProgressController";
import cors from 'cors';

const progressController : ProgressController = new ProgressController();
const port : number = 3000;

mongoose.connect('mongodb+srv://trab_final_sm2023:trab_final_sm2023@cluster0.9gxet0q.mongodb.net/?retryWrites=true&w=majority',{});


const app: express.Application = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/progress', progressController.show);
app.get('/progress/search_id/:id', progressController.indexById);
app.get('/progress/search_nickname/*', progressController.indexByNickname);
app.get('/progress/search_password/*', progressController.indexByPassword);
app.post('/progress', progressController.store);
app.put('/progress/*', progressController.update);
app.delete('/progress/*', progressController.destroy);
app.delete('/progress/delete_id/:id', progressController.destroyById);


app.listen(port, () => console.log('API-REST Started!'));


