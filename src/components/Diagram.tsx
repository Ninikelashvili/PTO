"use client"
import React, { useState, useEffect, useCallback } from "react";
import testImage from '../../public/assets/test.webp'
import Switch from "./Switch"
import Image from "next/image";

interface DiagramProps {
  activeItem: string | null;
}

const Diagram: React.FC<DiagramProps> = ({ activeItem }) => {
  const [switchStates, setSwitchStates] = useState<{ [key: string]: boolean }>({
    Sapling: false,
    Workday: false,
    Xero: false,
    Rippling: false,
    Expensify: false,
    Zenefits: false,
  });

  const handleChange = useCallback((title: string, checked: boolean) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [title]: checked,
    }));

    if (activeItem !== null) {
      localStorage.setItem(
        activeItem,
        JSON.stringify({ ...switchStates, [title]: checked })
      );
    }
  }, [activeItem, switchStates]);

  useEffect(() => {
  
    const initialSwitchStates: { [key: string]: boolean } = {
      Sapling: false,
      Workday: false,
      Xero: false,
      Rippling: false,
      Expensify: false,
      Zenefits: false,
    };

    if(activeItem !== null){
      const storedSwitchStates = localStorage.getItem(activeItem);
  
      if (storedSwitchStates) {
        setSwitchStates(JSON.parse(storedSwitchStates));
      } else {
    
        if (activeItem === "small") {
          initialSwitchStates.Zenefits = true; 
        } else if (activeItem === "medium") {
          initialSwitchStates.Sapling = true;
          initialSwitchStates.Workday = true; 
        }
    
        setSwitchStates(initialSwitchStates);
      }
    }
  }, [activeItem]); 

  const anyTrue = Object.values(switchStates).some(state => state);
  
  return (
    <div className="w-full flex flex-col justify-center items-start px-6 gap-5 lg:px-32 xl:flex-row xl:gap-0">
      <div className="order-2 flex flex-col items-start gap-5 w-full xl:order-1 xl:w-lg xl:min-w-md">
        <Switch title="Sapling" description="HR Management" type="topLeft" checked={switchStates["Sapling"]} onChange={(checked) => handleChange("Sapling", checked)} />
        <Switch title="Workday" description="HR Management" type="middleLeft" checked={switchStates["Workday"]} onChange={(checked) => handleChange("Workday", checked)} />
        <Switch title="Xero" description="Employers Base" type="bottomLeft" checked={switchStates["Xero"]} onChange={(checked) => handleChange("Xero", checked)} />
      </div>
      <div className={`relative order-1 ${anyTrue ? "bg-purple-5 border-purple-1 after:h-full after:w-full after:absolute after:bg-transparent after:border after:border-purple-1  after:rounded-2.5xl after:top-o after:bottom-0 after:left-0 after:right-0" : "border-gray-2"} relative border rounded-3xl flex flex-col items-center min-h-md h-full pt-16 pb-12 px-10 w-full xl:order-2 xl:mt-2.5 xl:max-w-1.5md`}>
        <Image className="h-sm w-sm object-cover rounded-xl absolute -top-11 left-1/2 -translate-x-1/2 z-30" src={testImage} alt=""/>
        <div className="text-lg font-bold mb-1.5 purple-2">Lauren Robson</div>
        <span className="text-sm font-normal text-purple-3 mb-5">HR Director</span>
        <p className="text-purple-2 text-base leading-6 text-center font-normal">“I want to lower 
        PTO liability and keep my employess happy. I want to lower PTO liability.”
        </p>
      </div>
      <div className="order-3 flex flex-col items-end gap-5 w-full xl:order-3 xl:w-lg xl:min-w-md">
        <Switch title="Rippling" description="Salary Management" type="topRight" checked={switchStates["Rippling"]} onChange={(checked) => handleChange("Rippling", checked)} />
        <Switch title="Expensify" description="HR Management" type="middleRight" checked={switchStates["Expensify"]} onChange={(checked) => handleChange("Expensify", checked)} />
        <Switch title="Zenefits" description="HR Management" type="bottomRight" checked={switchStates["Zenefits"]} onChange={(checked) => handleChange("Zenefits", checked)} />
      </div>
    </div>
  );
};

export default Diagram


