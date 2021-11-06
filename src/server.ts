import express from 'express';
import mongoose from 'mongoose';
import { decksRoutes } from "./routes/decks.routes";

const app = express();

mongoose.connect('mongodb+srv://filipe_user:filipe_user@filipeserver-8wfhq.mongodb.net/database?retryWrites=true&w=majority', 
    {useNewUrlParser:true,
    useUnifiedTopology: true});


app.use(express.json());

app.use(decksRoutes);

app.listen(3333);
