"use client";
import { useState, useRef } from "react";
import AlpacaCanvas from "@/app/components/AlpacaCanvas";
import AccessoryPanel from "@/app/components/AccessoryPanel";
import StyleOptions from "@/app/components/StyleOptions";
import ActionButtons from "@/app/components/ActionButtons";

export default function Home() {
  {
    /* logic for accessory panel selections */
  }
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [selectedStyles, setSelectedStyles] = useState({});
  const handleShowOptions = (accessoryType) => {
    setSelectedAccessory(accessoryType);
  };
  {
    /* downbutton declared */
  }
  const contentRef = useRef(null);
  {
    /* logic for style panel selections */
  }
  const handleStyleSelect = (accessoryType, styleName) => {
    setSelectedStyles((prev) => ({
      ...prev,
      [accessoryType]: styleName,
    }));
  };
  return (
    <div className="bg-gray-200 pb-20">
      <h1 className="font-mono text-7xl text-orange-400">
        Shayla&apos;s Alpaca Image Generator
      </h1>

      <div className="flex gap-20">
        <AlpacaCanvas
          className="flex-shrink-0"
          ref={contentRef}
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
      <div className="mt-15 pl-15">
        <ActionButtons targetRef={contentRef} fileName="my-alpaca.png" />
      </div>
    </div>
  );
}
