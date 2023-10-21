"use client";
import Navbar from '@/components/common/Navbar'
import HomeSection from '@/components/home/HomeSection'
import VideoContainer from '@/components/video/VideoContainer'
import Checkout from "@/components/stripe/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import api from '@/utils/baseApi';

export default function Home() {

  const executed = useRef(false);

  const { data: session } = useSession();

  const router = useRouter();

  async function createAccount() {
    try {
      const { email, name } = session.user;

      const res = await api.post("/user", { email, name });
    } catch (err) {
      console.log(err);

      if (err.response.status === 400) {
        console.log(err.response.data);

        router.push("/");
      }
    }
  }

  //localhost:3000/api/auth/callback/google

   useEffect(() => {
    if (!executed.current && session && session.user) {
      createAccount();
      executed.current = true;
    }
  }, [session]);

  return (
    <main className=" py-8 px-16 bg-slate-900">
      <Navbar />
      <HomeSection />
      <VideoContainer />
      <Checkout />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
     
