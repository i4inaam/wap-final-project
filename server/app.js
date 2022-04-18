const express = require('express');
const cors = require('cors');
const userRouter = require('./router/userRouter');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/users', userRouter);

app.use((req, res, next) => {
    res.status(404).json({error : req.uri + "API is not supported"});
});

app.use((err, req, res, next) => {
    if(err.message == "NOT Found"){
        res.status(404).json({error : err.message});
    }
    else{
        res.status(500).json({error : "Sorry! Something went wrong"});
    }
});

app.listen(8000, console.log("Listening at 8000...."));


