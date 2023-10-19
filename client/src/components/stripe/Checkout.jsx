import React from "react";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const stripePromise = loadStripe(
  "pk_test_51MTjyySGTOfzTTM0fmvOxEfzZjURrWDApNqBTRH6iVZSZ81rVwiJWTVVE4txXfuZXXQ0tku0iLK0pYB5CdNxPVdG00zNDZyVRV"
);

export default function Checkout() {
  const [sessionId, setSessionId] = useState(null);

  const notifi = (msg) => toast(msg, { type: "error" });

  async function createSession() {
    try {
      const payload = {
        plan: "Basic",
        amount: 30,
      };

      const req = await axios.post(
        "http://localhost:8000/api/payment",
        payload
      );
      const { data } = req;
      setSessionId(data.id);
    } catch (err) {
      console.log(err);
      if (!err.response) return notifi("Can't reach the server");
    }
  }

  useEffect(() => {
    const redirectToCheckout = async () => {
      if (sessionId) {
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          sessionId: sessionId,
        });

        if (error) {
          console.error(error);
          // Handle any errors that occur during redirection
        }
      }
    };

    redirectToCheckout();
  }, [sessionId]);

  return (
    <div>
      <button onClick={createSession}>Pay</button>
    </div>
  );
}
