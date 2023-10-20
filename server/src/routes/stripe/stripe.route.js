const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

require("dotenv").config({ path: "../../../.env" });

const stripe = require("stripe")(
  "sk_test_51MTjyySGTOfzTTM0SwaXpdD5RHM54WoCRU6Y7aEpBMYhf8TXk2EtQekMy9sgYdQvxpE26N6HaUSbnkuCJaMxe6zZ00q4fjDsON"
);

router.post("/payment", async (req, res) => {
  try {

    const { plan,amount } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: plan,
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "https://langesh.in",
      cancel_url: "https://langesh.in/contact",
      client_reference_id: 1234,
    });

    res.send({ id: session.id });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});


const endpointSecret =
  "whsec_fa606cc8c0a116ad23ed490c6ef869908e404a7d8696965e0bd57bf7c99bc83a";

router.post(
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

module.exports = { stripeRouter: router };
