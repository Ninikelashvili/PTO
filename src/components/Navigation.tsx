"use client"
import React, { useState } from 'react';

interface NavigationProps {
  setActiveItem: (item: string) => void;
  activeItem: string | null;
}

const Navigation: React.FC<NavigationProps> = ({ setActiveItem, activeItem }) => {
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <ul className="w-full flex justify-between items-center border-b border-purple-2/15 mb-16 lg:px-32 lg:border-none lg:justify-center lg:gap-2">
      <li className={`flex justify-start px-2.5 py-3.5 text-sm lg:px-4 lg:py-2 lg:font-bold lg:rounded-xl lg:text-xs cursor-pointer ${activeItem === 'small' ? 'border-b-2 border-purple-1 text-purple-1 font-bold lg:text-white lg:border-transparent lg:bg-purple-1' : 'border-b-2 border-transparent font-medium text-purple-2 opacity-60 lg:border lg:border-purple-2/15 lg:text-purple-4'}`} onClick={() => handleItemClick('small')}>Small Business</li>
      <li className={`flex justify-center px-2.5 py-3.5 text-sm lg:px-4 lg:py-2 lg:font-bold lg:rounded-xl lg:text-xs cursor-pointer ${activeItem === 'medium' ? 'border-b-2 border-purple-1 text-purple-1 font-bold lg:text-white lg:border-transparent lg:bg-purple-1' : 'border-b-2 border-transparent font-medium text-purple-2 opacity-60 lg:border lg:border-purple-2/15 lg:text-purple-4'}`} onClick={() => handleItemClick('medium')}>Medium Business</li>
      <li className={`flex justify-end px-2.5 py-3.5 text-sm lg:px-4 lg:py-2 lg:font-bold lg:rounded-xl lg:text-xs cursor-pointer ${activeItem === 'enterprise' ? 'border-b-2 border-purple-1 text-purple-1 font-bold lg:text-white lg:border-transparent lg:bg-purple-1' : 'border-b-2 border-transparent font-medium text-purple-2 opacity-60 lg:border lg:border-purple-2/15 lg:text-purple-4'}`} onClick={() => handleItemClick('enterprise')}>Enterprise</li>
    </ul>
  );
};

export default Navigation;
