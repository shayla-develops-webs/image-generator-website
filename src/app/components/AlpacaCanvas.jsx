import Image from "next/image";
import React, { useRef, useImperativeHandle, forwardRef } from "react";

function AlpacaCanvas({ selectedStyles = {} }, ref) {
  const contentRef = useRef(null);
  useImperativeHandle(ref, () => ({
    getElement: () => contentRef.current,
  }));
  const visible = (id) => {
    return Object.values(selectedStyles).includes(id) ? "visible" : "hidden";
  };
  return (
    <div className="alpaca-box w-[25rem] h-[25rem] bg-blue-200 relative border-2 border-solid mt-[3.75rem] ml-[3.75rem]">
      <div ref={contentRef} className="image-stack">
        <Image
          id="default-neck"
          src="/images/neck/default.png"
          alt="default alpaca neck"
          fill
          className={`object-cover z-1 pl-7 pb-0 ${visible("default-neck")}`}
        />
        <Image
          id="bend-backward-neck"
          src="/images/neck/bend-backward.png"
          alt="alpaca neck bending backwards"
          fill
          className={`object-cover z-1 pl-7 pb-0 ${visible(
            "bend-backward-neck"
          )}`}
        />
        <Image
          id="bend-forward-neck"
          src="/images/neck/bend-forward.png"
          alt="alpaca neck bending forwards"
          fill
          className={`object-cover z-1 pl-7 pb-0 ${visible(
            "bend-forward-neck"
          )}`}
        />
        <Image
          id="default-eyes"
          src="/images/eyes/default.png"
          alt="default alpaca eyes"
          fill
          className={`object-cover z-3 pl-7 pb-0 ${visible("default-eyes")}`}
        />
        <Image
          id="angry-eyes"
          src="/images/eyes/angry.png"
          alt="angry alpaca eyes"
          fill
          className={`object-cover z-3  pl-7 pb-0 ${visible("angry-eyes")}`}
        />
        <Image
          id="naughty-eyes"
          src="/images/eyes/naughty.png"
          alt="naughty alpaca eyes"
          fill
          className={`object-cover z-4 pl-7 pb-0 ${visible("naughty-eyes")}`}
        />
        <Image
          id="star-eyes"
          src="/images/eyes/star.png"
          alt="star alpaca eyes"
          fill
          className={`object-cover z-4 pl-7 pb-0 ${visible("star-eyes")}`}
        />
        <Image
          id="nose"
          src="/images/nose.png"
          alt="default alpaca nose"
          fill
          className={`object-cover z-3 pl-7 pb-0 ${visible("nose")}`}
        />
        <Image
          id="default-mouth"
          src="/images/mouth/default.png"
          alt="default alpaca mouth"
          fill
          className={`object-cover z-4 pl-7 pb-0 ${visible("default-mouth")}`}
        />
        <Image
          id="astonished-mouth"
          src="/images/mouth/astonished.png"
          alt="astonished alpaca mouth"
          fill
          className={`object-cover z-4 pl-7 pb-0 ${visible(
            "astonished-mouth"
          )}`}
        />
        <Image
          id="eating-mouth"
          src="/images/mouth/eating.png"
          alt="eating alpaca mouth"
          fill
          className={`object-cover z-4 pl-7 pb-0 ${visible("eating-mouth")}`}
        />
        <Image
          id="laugh-mouth"
          src="/images/mouth/laugh.png"
          alt="laughing alpaca mouth"
          fill
          className={`object-cover z-4 pl-7 pb-0 ${visible("laugh-mouth")}`}
        />
        <Image
          id="tongue-mouth"
          src="/images/mouth/tongue.png"
          alt="tongue sticking out alpaca mouth"
          fill
          className={`object-cover z-4 pl-7 pb-0 ${visible("tongue-mouth")}`}
        />
        <Image
          id="default-ears"
          src="/images/ears/default.png"
          alt="default alpaca ears"
          fill
          className={`object-cover z-1 pl-7 pb-0 ${visible("default-ears")}`}
        />
        <Image
          id="tiltbackwards-ears"
          src="/images/ears/tilt-backward.png"
          alt="alpaca ears tilting backwards"
          fill
          className={`object-cover z-1 pl-7 pb-0 ${visible(
            "tiltbackwards-ears"
          )}`}
        />
        <Image
          id="tiltforward-ears"
          src="/images/ears/tilt-forward.png"
          alt="alpaca ears tilting forewards"
          fill
          className={`object-cover z-1 pl-7 pb-0 ${visible(
            "tiltforward-ears"
          )}`}
        />
        <Image
          id="default-leg"
          src="/images/leg/default.png"
          alt="alpaca default leg"
          fill
          className={`object-cover z-2 pl-7 pb-0 ${visible("default-leg")}`}
        />
        <Image
          id="bubbletea-leg"
          src="/images/leg/bubble-tea.png"
          alt="alpaca bubble tea leg"
          fill
          className={`object-cover z-2 pl-7 pb-0 ${visible("bubbletea-leg")}`}
        />
        <Image
          id="cookie-leg"
          src="/images/leg/cookie.png"
          alt="alpaca cookie leg"
          fill
          className={`object-cover z-2 pl-7 pb-0 ${visible("cookie-leg")}`}
        />
        <Image
          id="gameconsole-leg"
          src="/images/leg/game-console.png"
          alt="alpaca game console leg"
          fill
          className={`object-cover z-2 pl-7 pb-0 ${visible("gameconsole-leg")}`}
        />
        <Image
          id="short-hair"
          src="/images/hair/short.png"
          alt="alpaca short hair"
          fill
          className={`object-cover z-5 pl-7 pb-0 ${visible("short-hair")}`}
        />
        <Image
          id="bang-hair"
          src="/images/hair/bang.png"
          alt="alpaca bang hair"
          fill
          className={`object-cover z-5 pl-10 pb-0 ${visible("bang-hair")}`}
        />
        <Image
          id="curls-hair"
          src="/images/hair/curls.png"
          alt="alpaca curly hair"
          fill
          className={`object-cover z-5 pl-7 pb-0 ${visible("curls-hair")}`}
        />
        <Image
          id="elegant-hair"
          src="/images/hair/elegant.png"
          alt="alpaca elegant hair"
          fill
          className={`object-cover z-5 pl-7 pb-0 ${visible("elegant-hair")}`}
        />
        <Image
          id="fancy-hair"
          src="/images/hair/fancy.png"
          alt="alpaca fancy hair"
          fill
          className={`object-cover z-5 pl-15 pb-0 ${visible("fancy-hair")}`}
        />
        <Image
          id="earing-accessory"
          src="/images/accessories/earings.png"
          alt="alpaca with earings"
          fill
          className={`object-cover z-6 pl-8 pb-0 ${visible(
            "earing-accessory"
          )}`}
        />
        <Image
          id="flower-accessory"
          src="/images/accessories/flower.png"
          alt="alpaca with flower on ear"
          fill
          className={`object-cover z-6 pl-7 pb-0 ${visible(
            "flower-accessory"
          )}`}
        />
        <Image
          id="glasses-accessory"
          src="/images/accessories/glasses.png"
          alt="alpaca with glasses"
          fill
          className={`object-cover z-6 pl-7 pb-0 ${visible(
            "glasses-accessory"
          )}`}
        />
        <Image
          id="headphone-accessory"
          src="/images/accessories/headphone.png"
          alt="alpaca with headphones"
          fill
          className={`object-cover z-6 pl-7 pb-0 ${visible(
            "headphone-accessory"
          )}`}
        />
        <Image
          id="dark-blue-background"
          src="/images/backgrounds/darkblue50.png"
          alt="dark blue background"
          fill
          className={`object-cover z-0 ${visible("dark-blue-background")}`}
        />
        <Image
          id="green-background"
          src="/images/backgrounds/green60.png"
          alt="green background"
          fill
          className={`object-cover z-0 ${visible("green-background")}`}
        />
        <Image
          id="red-background"
          src="/images/backgrounds/red60.png"
          alt="red background"
          fill
          className={`object-cover z-0 ${visible("red-background")}`}
        />
        <Image
          id="yellow-background"
          src="/images/backgrounds/yellow50.png"
          alt="yellow background"
          fill
          className={`object-cover z-0 ${visible("yellow-background")}`}
        />
      </div>
    </div>
  );
}

export default forwardRef(AlpacaCanvas);
