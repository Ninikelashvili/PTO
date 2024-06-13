import Image from "next/image";
import React, { useState, useMemo, useEffect } from "react";
import testImage from '../../public/assets/test.webp'

interface SwitchProps {
  title: string;
  description: string,
  type: string,
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ title, checked = false, onChange, description, type }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const switchComponent = useMemo(
    () => (
      <div className={`${isChecked && "checked"} ${type} relative w-full`}>
        <div className={`w-full rounded-xl ${isChecked ? "border border-purple-1 bg-purple-1": "border border-transparent"} xl:max-w-72 `}>
          <div className={`cursor-pointer flex items-center justify-between w-full py-4 pl-4 pr-5 rounded-xl bg-white ${isChecked ? 'border-purple-1 border' : "border border-gray-2"}`} onClick={handleChange}>
            <div className="flex items-center justify-start gap-2">
              <Image className="h-12 w-12 object-cover rounded-xl" src={testImage} alt=""/>
              <div className="flex flex-col items-start mr-3">
                <span className="text-base text-purple-2 font-medium leading-6">{title}</span>
                <span className="text-xs text-purple-3 font-normal leading-5">{description}</span>
              </div>
            </div>
            <input type="checkbox" className="hidden" checked={isChecked} readOnly />
            <label className="flex items-center cursor-pointer relative">
              <div className={`w-xs h-3.5 rounded-full ${isChecked ? "bg-purple-1 border-purple-1" : "border-2 border-gray-1 "}`}></div>
              <div
                className={`absolute left-1 w-1.5 h-1.5 bg-gray-1 rounded-full transform duration-300 ease-in-out ${
                  isChecked ? "translate-x-2 bg-white" : "bg-gray-1"
                }`}
              ></div>
            </label>
          </div>
        </div>
      </div>
    ),
    [isChecked, title, handleChange]
  );

  return switchComponent;
};

export default Switch;
