const express = require("express");
const app = express();
const cors = require("cors");
const { stripeRouter } = require("./routes/stripe/stripe.route");
const connectDb = require("../utils/connectDb");
const { userRouter } = require("./routes/user/user.rote");
const { videoRouter } = require("./routes/video/video.router");
const { uploadRouter } = require("./routes/upload/upload.route");

require("dotenv").config();

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 8000;

connectDb();

app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// statically expose uploads folder
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api", stripeRouter);
app.use("/api/user", userRouter);
app.use("/api/video", videoRouter);
app.use("/api/upload",uploadRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
