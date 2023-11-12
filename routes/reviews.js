const express = require("express");

const router = express.Router();
const { createReview, getAllReviews } = require("../controllers/reviews");

router.route("/").post(createReview).get(getAllReviews);

module.exports = router;
