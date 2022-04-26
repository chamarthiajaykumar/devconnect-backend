const Question = require("./../models/questionModel");
const catchAsync = require("./../utils/catchAsync");

exports.postQuestion = catchAsync(async (req, res, next) => {
  const { question, userId, tag, questionExplanation } = req.body;
  const newQuestion = await Question.create({
    question,
    user: userId,
    tag,
    questionExplanation,
  });
  res.status(201).json({
    status: "success",
    data: {
      newQuestion,
    },
  });
});

exports.getAllQuestions = catchAsync(async (req, res, next) => {
  const questions = await Question.find().populate({
    path: "answers",
    select: "likes answer -question",
  });
  res.status(200).json({
    status: "success",
    data: {
      questions,
    },
  });
});
