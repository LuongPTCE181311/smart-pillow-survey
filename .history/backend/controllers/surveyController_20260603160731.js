const SurveyResponse = require("../models/SurveyResponse");

exports.submitSurvey = async (req, res) => {
  try {
    const survey = await SurveyResponse.create(
      req.body
    );

    res.status(201).json({
      success: true,
      data: survey,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};