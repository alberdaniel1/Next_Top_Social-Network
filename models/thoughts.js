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
    reactions: [],

  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
ProjectSchema.virtual("reactionCount").get(function(){
  return this.reactions.length;
});

module.exports = thoughtSchema;