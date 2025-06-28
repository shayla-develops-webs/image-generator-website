"use client";
import { useState } from "react";
import AlpacaCanvas from "@/app/components/AlpacaCanvas";
import AccessoryPanel from "@/app/components/AccessoryPanel";
import StyleOptions from "@/app/components/StyleOptions";

export default function Home() {
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [selectedStyles, setSelectedStyles] = useState({});
  const handleShowOptions = (accessoryType) => {
    setSelectedAccessory(accessoryType);
  };

  const handleStyleSelect = (accessoryType, styleName) => {
    setSelectedStyles((prev) => ({
      ...prev,
      [accessoryType]: styleName,
    }));
  };
  return (
    <div className="bg-gray-200">
      <h1 className="font-mono text-7xl text-orange-400">
        Shayla's Alpaca Image Generator
      </h1>
      <div className="flex gap-20">
        <AlpacaCanvas
          className="flex-shrink-0"
          selectedStyles={selectedStyles}
        />
        <div className="flex flex-col gap-4">
          <AccessoryPanel onShowOptions={handleShowOptions} />
          {selectedAccessory && (
            <StyleOptions
              accessory={selectedAccessory}
              onSelectStyle={handleStyleSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
}
