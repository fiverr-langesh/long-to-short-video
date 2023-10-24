const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const { User } = require("../../model/user.model");

require("dotenv").config({ path: "../../../.env" });

const stripe = require("stripe")(
  "sk_test_51MTjyySGTOfzTTM0SwaXpdD5RHM54WoCRU6Y7aEpBMYhf8TXk2EtQekMy9sgYdQvxpE26N6HaUSbnkuCJaMxe6zZ00q4fjDsON"
);

router.post("/payment", async (req, res) => {
  try {
    const { plan, amount, email,minutes } = req.body;

    const user = await User.findOne({ email: email }).lean();

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      payment_intent_data: {
        metadata: {
          userId: user._id.toString(),
          plan,
          minutes
        },
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: plan,
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/",
      client_reference_id: user._id.toString(),
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
