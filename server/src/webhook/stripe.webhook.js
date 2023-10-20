
const stripe = require("stripe")(
  "sk_test_51MTjyySGTOfzTTM0SwaXpdD5RHM54WoCRU6Y7aEpBMYhf8TXk2EtQekMy9sgYdQvxpE26N6HaUSbnkuCJaMxe6zZ00q4fjDsON"
);
const express = require("express");
const app = express();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
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
      console.log(err.message);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

     switch (event.type) {
       case "checkout.session.completed":
             const data = event.data.object;
             console.log(data.id)
             console.log(data.client_reference_id)
             console.log(data.amount_total)
                console.log(data.display_items[0].custom.name)
                console.log(data.display_items[0].metadata.plan);
         // Then define and call a function to handle the event checkout.session.completed
         break;
      
    //    default:
    //      console.log(`Unhandled event type ${event.type}`);
     }

    // Handle the event
    console.log(`Unhandled event type ${event.type}`);

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

app.listen(4242, () => console.log("Running on port 4242"));
