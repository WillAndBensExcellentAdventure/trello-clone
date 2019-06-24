const express = require('express');
const mongoose = require('mongoose');
const DashboardModel = require('./schema');

mongoose.connect('mongodb://localhost/newTest', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to DB!');
  // we're connected!
//   const test = new DashboardModel({
//     title: 'test2',
//     notes: [{ title: 'myTest2', contents: ['line one', 'line two', 'line three'] }],
//   });
//   console.log('Test', test);

  //   test.save((err, test) => {
  //     if (err) console.log(err);
  //     console.log('saved!', test);
  //   });

  DashboardModel.findOne({ title: 'test2' }, function (err, Dashboard) {
    if (err) return handleError(err);
    // Prints "Space Ghost is a talk show host".
    console.log(Dashboard.notes);
    
    Dashboard.notes[0].contents.map(note => {
        console.log(note)
    });
  });
});

const port = 8080;

const app = express();

app.get('/', (req, res) => res.send('Hello World!!!'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
