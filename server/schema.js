const mongoose = require('mongoose');

const { Schema } = mongoose;


const NoteSchema = new Schema({
  title: String,
  contents: [String],
});

const DashboardSchema = new Schema({
  title: String,
  notes: [NoteSchema],
});


const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  userDashboards: [DashboardSchema],
});

const UsersModel = mongoose.model('Users', UserSchema);

module.exports = UsersModel;
