"use client";
import Navbar from '@/components/common/Navbar'
import HomeSection from '@/components/home/HomeSection'
import VideoContainer from '@/components/video/VideoContainer'
import Checkout from "@/components/stripe/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Your content */}
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
      {/* Same as */}
      <ToastContainer />{" "}
    </main>
  );
}