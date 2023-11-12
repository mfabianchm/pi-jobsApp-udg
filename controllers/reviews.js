const Review = require("../models/Review");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const mongoose = require("mongoose");

const getAllReviews = async (req, res) => {
  Review.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};

const createReview = async (req, res) => {
  const review = await Review.create(req.body);
  res.status(StatusCodes.CREATED).json({ review });
};

module.exports = {
  createReview,
  getAllReviews,
};
