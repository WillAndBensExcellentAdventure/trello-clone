const mongoose = require('mongoose');

const { Schema } = mongoose;


const note = new Schema({
  title: String,
  contents: [String],
});

const dashboard = new Schema({
  user_id: String,
  title: String,
  notes: [note],
});

const Dashboard = mongoose.model('Dashboard', dashboard);

module.exports = Dashboard;
