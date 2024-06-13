"use client"
import React, { useState } from "react";
import Diagram from "@/components/Diagram";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [activeItem, setActiveItem] = useState<string | null>("small");
  return (
    <main className="container py-12 lg:py-20">
      <div className="w-full flex flex-col items-center">
        <h2 className="px-6 mb-6 text-4xl font-bold text-purple-2 text-center lg:px-32 lg:text-6xl">Easy Turn-Key Integration</h2>
        <p className="px-6 text-base text-purple-2 font-normal leading-6 mb-5 text-center opacity-80 lg:mb-12 lg:text-lg lg:leading-7 lg:max-w-xl lg:w-full lg:text-purple-3 lg:opacity-100">Increase job satisfaction, improve engagement, decrease burnout and lower payroll liability by reimagining what employees can do with their PTO.</p>
        <Navigation setActiveItem={setActiveItem} activeItem={activeItem}/>
        <Diagram activeItem={activeItem}/>
      </div>
    </main>
  );
}
