const SurveyResponse = require("../models/SurveyResponse");

exports.getResponses = async (
  req,
  res
) => {
  try {
    const responses =
      await SurveyResponse.find().sort({
        createdAt: -1,
      });

    res.json(responses);
  } catch (error) {
    res.status(500).json(error);
  }
};