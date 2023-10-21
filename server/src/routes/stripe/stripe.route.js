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
      success_url: "https://www.langesh.in",
      cancel_url: "https://www.langesh.in/contact",
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

module.exports = { stripeRouter: router };