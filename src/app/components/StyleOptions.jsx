"use client";
import React, { useState } from "react";

function StyleOptions({ accessory, onSelectStyle }) {
  const options = {
    hair: [
      "short-hair",
      "bang-hair",
      "curls-hair",
      "elegant-hair",
      "fancy-hair",
    ],
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

  const currentOptions = options[accessory] || [];
  return (
    <div>
      <h3 className="font-mono">Style</h3>
      <div className="grid grid-cols-3 gap-3">
        {currentOptions.map((option) => (
          <button
            key={option}
            onClick={() => onSelectStyle(accessory, option)}
            className="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-white font-bold py-2 px-4 rounded-full"
          >
            {option.replace(/-/g, " ")}
          </button>
        ))}
      </div>
    </div>
  );
}
export default StyleOptions;
