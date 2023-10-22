"use client";
import Navbar from "@/components/common/Navbar";
import HomeSection from "@/components/home/HomeSection";
import VideoContainer from "@/components/video/VideoContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import PricingContainer from "@/components/pricing/PricingContainer";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className=" py-8 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-16 bg-slate-900 h-screen overflow-y-auto">
      <Navbar />
      <HomeSection />
      <VideoContainer />
      {/* <PricingContainer /> */}
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
