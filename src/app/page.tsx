"use client";

import Counter from "@/components/Counter";
import Navbar from "@/components/Navbar";
import Setting from "@/components/Setting";
import Theme from "@/components/Theme";
import { AppProvider } from "@/context/AppProvider";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <AppProvider>
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-500">
          <Navbar />
          <div className=" h-full grow flex flex-col gap-y-5 justify-center items-center text-white">
            <Setting></Setting>
            <Counter></Counter>
          </div>
        </div>
        <Theme></Theme>
      </AppProvider>
    </>
  );
}
