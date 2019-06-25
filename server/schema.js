const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const passportLocalMongoose = require('passport-local-mongoose');

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
  userDashboards: [DashboardSchema],
});


UserSchema.plugin(uniqueValidator);
UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('Users', UserSchema);

module.exports = User;
