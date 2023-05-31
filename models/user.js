const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
      max_length: 50,
    },
     Thoughts: [thoughtSchema],

     Friends: [userSchema],
  },
    
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);
userSchema.virtual("friendCount").get(function(){
  return this.Friends.length;
});

const user = model('user', userSchema);

module.exports = userSchema;
