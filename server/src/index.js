const express = require("express");
const app = express();
const cors = require("cors");
const { stripeRouter } = require("./routes/stripe/stripe.route");

require("dotenv").config();

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", stripeRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// (async () => {
//   const intent = await stripe.paymentIntents.create({
//     amount: 1000, // amount in cents
//     currency: "usd",
//     // Add additional payment intent parameters as needed
//   });

//   console.log(intent.client_secret);
// })()

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
