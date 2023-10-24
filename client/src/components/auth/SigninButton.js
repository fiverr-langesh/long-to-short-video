"use client";
import React from "react";
import { signIn } from "next-auth/react";
const SigninButton = () => {
    
  return (
    <button
      onClick={() =>
        signIn()
      }
      className="text-green-600 ml-auto text-xl"
    >
      Sign
    </button>
  );
};

export default SigninButton;
