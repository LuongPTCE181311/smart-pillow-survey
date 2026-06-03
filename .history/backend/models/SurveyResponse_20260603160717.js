const mongoose = require("mongoose");

const SurveyResponseSchema = new mongoose.Schema(
  {
    sectionA: Object,
    sectionB: Object,
    sectionC: Object,
    sectionD: Object,
    sectionE: Object,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("SurveyResponse", SurveyResponseSchema);
