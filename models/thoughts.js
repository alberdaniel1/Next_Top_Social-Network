const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength:1
    },
    createdAt: {
      type: Date,
      default: Date.now,
      timestamps: true
    },
    username:{
      type: String,
      required: true
    },
    reactions: [reactionSchema],

  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,

  }
);
thoughtSchema.virtual("reactionCount").get(function(){
  return this.reactions.length;
});
const thought = model('reaction', thoughtSchema)
// write a new schema like above same goes on to the users reaction
module.exports = thought;

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength:1
    },
    createdAt: {
      type: Date,
      default: Date.now,
      timestamps: true
    },
    username:{
      type: String,
      required: true
    },
    reactions: [reactionSchema],

  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,

  }
);