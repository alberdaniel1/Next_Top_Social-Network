const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create Student model
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
      getters: true,
    },
  }
);
ProjectSchema.virtual("friendCount").get(function(){
  return this.Friends.length;
});

const Student = model('user', studentSchema);

module.exports = userSchema;
