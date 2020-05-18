const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./Router/userRouter');
const middleware = require('./utils/middleware');
const DATABASE_URL = 'mongodb+srv://raj:mypassword@cluster0-gifz4.mongodb.net/test?retryWrites=true&w=majority' || 'mongodb://localhost/user_data';
const PORT = process.env.PORT || 3000;

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});


app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(middleware.requestLogger);

app.use('/api/users', userRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(PORT, () => {console.log(`Express app started on port ${PORT}`)});