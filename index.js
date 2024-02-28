const express = require('express');
const path = require('path');
const textRouter = require('./route');
const mongoose = require('mongoose');
const cors = require('cors');
const ejs = require('ejs');
const app = express();
mongoose.connect('mongodb+srv://nvtaikma1:nvtaikma1@imagestore.6gqzokm.mongodb.net/?retryWrites=true&w=majority&appName=imageStore')
  .then(() => console.log('Connected!'));
  app.set('view engine', 'ejs');

  app.use(cors(
    {
      origin: '*',
    }
  ));
app.use(express.static(path.join(__dirname, "view")));
app.use(express.json());

app.get("/", (req, res) => {
     res.render('index.js');
})

app.use('/api', textRouter)
app.listen(3000, ()=>{
    console.log("server runing");
});