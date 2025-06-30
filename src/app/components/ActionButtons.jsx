import React from "react";
import html2canvas from "html2canvas";

function ActionButtons({ targetRef, fileName = "image.png", onRandomize }) {
  function handleDownload() {
    console.log("download");

    {
      /* Check if targetRef exists */
    }
    if (!targetRef || !targetRef.current) {
      console.error("No target element found to capture");
      return;
    }

    {
      /* Get the DOM element to capture */
    }
    const element = targetRef.current.getElement
      ? targetRef.current.getElement()
      : targetRef.current;

    {
      /* Generate and download the image */
    }
    html2canvas(element, {
      backgroundColor: null,
      useCORS: true,
    })
      .then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = fileName;
        link.click();
      })
      .catch((error) => {
        console.error("Error generating image:", error);
      });
  }

  function handleRandomize() {
    console.log("randomize");
    if (onRandomize) {
      onRandomize();
    } else {
      console.warn("No onRandomize prop passed to ActionButtons");
    }
  }

  return (
    <div>
      <button
        onClick={handleRandomize}
        className="mr-5 bg-white hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-black font-bold py-2 px-4 square-full"
      >
        Randomize
      </button>
      <button
        onClick={handleDownload}
        className="bg-white hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-black font-bold py-2 px-4 square-full"
      >
        Download
      </button>
    </div>
  );
}

export default ActionButtons;
