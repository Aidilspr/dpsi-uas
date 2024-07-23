// app.js
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const examRouter = require('./routes/exam');
const questionRouter = require('./routes/questions');
const answersRouter = require('./routes/answers');
const scoresRouter = require('./routes/scores');
const studentRouter = require('./routes/student');
const sequelize = require('./models/index');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/exam',examRouter)
app.use('/question', questionRouter)
app.use('/answers',answersRouter)
app.use('/scores',scoresRouter)
app.use('/student',studentRouter)



sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });

module.exports = app;
