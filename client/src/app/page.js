"use client";
import Navbar from "@/components/common/Navbar";
import HomeSection from "@/components/home/HomeSection";
import VideoContainer from "@/components/video/VideoContainer";
import Checkout from "@/components/stripe/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className=" py-8 px-16 bg-slate-900 h-screen overflow-y-auto">
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
