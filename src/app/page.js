"use client";
import { useState, useRef } from "react";
import AlpacaCanvas from "@/app/components/AlpacaCanvas";
import AccessoryPanel from "@/app/components/AccessoryPanel";
import StyleOptions from "@/app/components/StyleOptions";
import ActionButtons from "@/app/components/ActionButtons";

{
  /* this is a style options data object that is lopped over with the below function
  to randomize your alpaca */
}
export const styleOptions = {
  hair: ["short-hair", "bang-hair", "curls-hair", "elegant-hair", "fancy-hair"],
  eyes: ["default-eyes", "angry-eyes", "naughty-eyes", "star-eyes"],
  mouth: [
    "default-mouth",
    "astonished-mouth",
    "eating-mouth",
    "laugh-mouth",
    "tongue-mouth",
  ],
  ears: ["default-ears", "tiltforward-ears", "tiltbackwards-ears"],
  leg: ["default-leg", "bubbletea-leg", "cookie-leg", "gameconsole-leg"],
  accessories: [
    "earing-accessory",
    "flower-accessory",
    "headphone-accessory",
    "glasses-accessory",
  ],
  neck: ["default-neck", "bend-forward-neck", "bend-backward-neck"],
  background: [
    "dark-blue-background",
    "green-background",
    "red-background",
    "yellow-background",
  ],
  nose: ["nose"],
};
export default function Home() {
  {
    /*} Helper function to pick a random style */
  }
  function getRandomStyle(styles) {
    return styles[Math.floor(Math.random() * styles.length)];
  }

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

  {
    /* Your randomize handler picks a random style from each category*/
  }
  const handleRandomize = () => {
    const randomizedStyles = {};
    for (const category in styleOptions) {
      randomizedStyles[category] = getRandomStyle(styleOptions[category]);
    }
    setSelectedStyles(randomizedStyles);
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
        <ActionButtons
          onRandomize={handleRandomize}
          targetRef={contentRef}
          fileName="my-alpaca.png"
        />
      </div>
    </div>
  );
}
