import React from "react";

function ActionButtons() {
  function handleClick() {
    console.log("download");
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-white hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-black font-bold py-2 px-4 square-full"
      >
        Download
      </button>
    </div>
  );
}
export default ActionButtons;
