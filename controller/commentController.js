const Comment = require("../models/commentModel");
const catchAsync = require("./../utils/catchAsync");

exports.createComment = catchAsync(async (req, res, next) => {
  const { userId, comment, answerId } = req.body;
  const newComment = await Comment.create({
    user: userId,
    comment,
    answer: answerId,
  });

  res.status(201).json({
    status: "success",
    data: {
      newComment,
    },
  });
});

exports.getAllComments = catchAsync(async (req, res, next) => {
  const comments = await Comment.find();

  res.status(200).json({
    status: "success",
    data: {
      comments,
    },
  });
});
