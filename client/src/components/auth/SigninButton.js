"use client";
import React from "react";
import { signIn } from "next-auth/react";
const SigninButton = () => {
    
  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: "http://fiverr.langesh.in:3000/create-account"
        })
      }
      className="text-green-600 ml-auto text-xl"
    >
      Sign in
    </button>
  );
};

export default SigninButton;
