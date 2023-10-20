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

const endpointSecret =
  "whsec_fa606cc8c0a116ad23ed490c6ef869908e404a7d8696965e0bd57bf7c99bc83a";
  
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
