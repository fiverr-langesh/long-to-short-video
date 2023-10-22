const stripe = require("stripe")(
  "sk_test_51MTjyySGTOfzTTM0SwaXpdD5RHM54WoCRU6Y7aEpBMYhf8TXk2EtQekMy9sgYdQvxpE26N6HaUSbnkuCJaMxe6zZ00q4fjDsON"
);
const express = require("express");
const { User } = require("../model/user.model");
const connectDb = require("../../utils/connectDb")
const app = express();

require("dotenv").config({ path: "../../.env" });

connectDb();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  "whsec_fa606cc8c0a116ad23ed490c6ef869908e404a7d8696965e0bd57bf7c99bc83a";

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);

      // if (event.type === "checkout.session.completed") {
      //   console.log("Checkout session completed");
      //   const data = event.data.object;

      //   console.log('event', event)

      //   console.log(data.id);
      //   console.log(data.client_reference_id);
      //   console.log(data.amount_total);

      //   // update user credits
      //   await User.findByIdAndUpdate(data.client_reference_id, {
      //     $inc: { credits: Number(data.amount_total) / 100 },
      //   });
      // }

      if (event.type === "payment_intent.succeeded") {
        console.log("Checkout session completed");
        const data = event.data.object;

        // console.log("event", event);

        // console.log(data.id);
        console.log(data.metadata);
        console.log(data.client_reference_id)
        // console.log(data.amount_total);

        // update user credits
        const updated = await User.findByIdAndUpdate(
          data.metadata.userId,
          {
            $inc: { credits: Number(data.metadata.minutes) },
          },
          { new: true }
        );

        console.log(updated)
      } return response.send();
    } catch (err) {
      console.log(err.message);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  }
);

app.listen(4242, () => console.log("Running on port 4242"));
