const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

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

UserSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.virtual('password').set(function (value) {
  this.passwordHash = bcrypt.hashSync(value, 12);
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model('Users', UserSchema);

module.exports = User;
