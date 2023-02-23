var mongoose = require("mongoose");
var leaveSchema = new mongoose.Schema(
  {
    formType: String,
    sickLeave:{
      type: Number,
    },
    casualLeave:{
      type: Number,
    },
    earnLeave: {
      type: Number,
    },
    from: Date,
    to: Date,
    days: Number,
    status: {
      type: String,
      enum: ["pending", "approved", "denied"],
      default: "pending"
    },
    approved: {
      type: Boolean,
      default: false
    },
    denied: {
      type: Boolean,
      default: false
    },
    fac: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Faculty"
      },
    },
      hod: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Faculty"
        },
    },
    username: String,

  },
  { timestamps: {} }
);

module.exports = mongoose.model("Leave", leaveSchema);
