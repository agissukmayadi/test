"use client";

import Counter from "@/components/Counter";
import Navbar from "@/components/Navbar";
import Setting from "@/components/Setting";
import Theme from "@/components/Theme";
import ContextProvider from "@/context/ContextProvider";
import { ThemeProvider } from "@/context/theme-context";
import { UserProvider } from "@/context/user-context";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <ContextProvider>
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-500">
          <Navbar />
          <div className=" h-full grow flex flex-col gap-y-5 justify-center items-center text-white">
            <Setting></Setting>
            <Counter></Counter>
          </div>
        </div>
        <Theme></Theme>
      </ContextProvider>
    </>
  );
}
