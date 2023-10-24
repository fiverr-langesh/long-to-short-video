"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useRef } from "react";
import api from "@/utils/baseApi";
import { useRouter } from "next/navigation";

export default function CreateAccount() {
  const executed = useRef(false);

  const { data: session } = useSession();

  const router = useRouter()

  async function createAccount() {
    try {
      const { email, name } = session.user;

      const res = await api.post("/user", { email, name });
    } catch (err) {
      console.log(err);

      if (err.response?.status === 400) {
        console.log(err.response.data);

      }
    }
    router.push("/");
  }

  //localhost:3000/api/auth/callback/google

  http: useEffect(() => {
    if (!executed.current && session && session.user) {
      createAccount();
      executed.current = true;
    }
  }, [session]);

  return (
    <div className="h-screen bg-slate-900 w-screen relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <h1 className="text-2xl text-white">
          Redirecting to your dashboard, please wait...
        </h1>
      </div>
    </div>
  );
}
