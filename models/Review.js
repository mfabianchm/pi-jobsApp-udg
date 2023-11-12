const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Proporciona nombre de compañia"],
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, "Proporciona la descripción"],
    },
    name: {
      type: String,
      required: [true, "Proporciona tu nombre"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
