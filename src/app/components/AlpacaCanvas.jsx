import Image from "next/image";
function AlpacaCanvas({ selectedStyles = {} }) {
  const visible = (id) => {
    return Object.values(selectedStyles).includes(id) ? "visible" : "hidden";
  };
  return (
    <div className="alpaca-box w-[25rem] h-[25rem] bg-blue-200 relative border-2 border-solid mt-[3.75rem] ml-[3.75rem]">
      <div className="image-stack">
        <Image
          id="default-neck"
          src="/images/neck/default.png"
          alt="default alpaca neck"
          fill
          className="object-contain"
          class="visible"
        />
        <Image
          id="bend-backward-neck"
          src="/images/neck/bend-backward.png"
          alt="alpaca neck bending backwards"
          fill
          className="object-contain"
          class="hidden"
        />
        <Image
          id="bend-forward-neck"
          src="/images/neck/bend-forward.png"
          alt="alpaca neck bending forwards"
          fill
          className="object-contain"
          class="hidden"
        />
        <Image
          id="nose"
          src="/images/nose.png"
          alt="default alpaca nose"
          fill
          className="object-contain"
          class="visible"
        />
        <Image
          id="default-eyes"
          src="/images/eyes/default.png"
          alt="default alpaca eyes"
          fill
          className={`object-contain pl-7 pb-3 ${visible("default-eyes")}`}
        />
        <Image
          id="angry-eyes"
          src="/images/eyes/angry.png"
          alt="angry alpaca eyes"
          fill
          className={`object-contain pl-7 pb-3 ${visible("angry-eyes")}`}
        />
        <Image
          id="naughty-eyes"
          src="/images/eyes/naughty.png"
          alt="naughty alpaca eyes"
          fill
          className={`object-contain pl-7 pb-3 ${visible("naughty-eyes")}`}
        />
        <Image
          id="star-eyes"
          src="/images/eyes/star.png"
          alt="star alpaca eyes"
          fill
          className={`object-contain pl-7 pb-3 ${visible("star-eyes")}`}
        />
        <Image
          id="default-mouth"
          src="/images/mouth/default.png"
          alt="default alpaca mouth"
          fill
          className={`object-contain pl-7 pb-3 ${visible("default-mouth")}`}
        />
        <Image
          id="astonished-mouth"
          src="/images/mouth/astonished.png"
          alt="astonished alpaca mouth"
          fill
          className={`object-contain pl-7 pb-3 ${visible("astonished-mouth")}`}
        />
        <Image
          id="eating-mouth"
          src="/images/mouth/eating.png"
          alt="eating alpaca mouth"
          fill
          className={`object-contain pl-7 pb-3 ${visible("eating-mouth")}`}
        />
        <Image
          id="laugh-mouth"
          src="/images/mouth/laugh.png"
          alt="laughing alpaca mouth"
          fill
          className={`object-contain pl-7 pb-3 ${visible("laughing-mouth")}`}
        />
        <Image
          id="tongue-mouth"
          src="/images/mouth/tongue.png"
          alt="tongue sticking out alpaca mouth"
          fill
          className={`object-contain pl-7 pb-3 ${visible("tongue-mouth")}`}
        />
        <Image
          id="default-ears"
          src="/images/ears/default.png"
          alt="default alpaca ears"
          fill
          className="object-contain"
          class="visible"
        />
        <Image
          id="tiltbackwards-ears"
          src="/images/ears/tilt-backward.png"
          alt="alpaca ears tilting backwards"
          fill
          className="object-contain"
          class="hidden"
        />
        <Image
          id="tiltforward-ears"
          src="/images/ears/tilt-forward.png"
          alt="alpaca ears tilting forewards"
          fill
          className="object-contain"
          class="hidden"
        />
        <Image
          id="default-leg"
          src="/images/leg/default.png"
          alt="alpaca default leg"
          fill
          className="object-contain"
          class="visible"
        />
        <Image
          id="bubbletea-leg"
          src="/images/leg/bubble-tea.png"
          alt="alpaca bubble tea leg"
          fill
          className="object-contain"
          class="hidden"
        />
        <Image
          id="cookie-leg"
          src="/images/leg/cookie.png"
          alt="alpaca cookie leg"
          fill
          className="object-contain"
          class="hidden"
        />
        <Image
          id="gameconsole-leg"
          src="/images/leg/game-console.png"
          alt="alpaca game console leg"
          fill
          className="object-contain"
          class="hidden"
        />
        <Image
          id="short-hair"
          src="/images/hair/short.png"
          alt="alpaca short hair"
          fill
          className={`object-contain pl-7 pb-3 ${visible("short-hair")}`}
        />
        <Image
          id="bang-hair"
          src="/images/hair/bang.png"
          alt="alpaca bang hair"
          fill
          className={`object-contain pl-10 pb-3 ${visible("bang-hair")}`}
        />
        <Image
          id="curls-hair"
          src="/images/hair/curls.png"
          alt="alpaca curly hair"
          fill
          className={`object-contain pl-7 pb-3 ${visible("curls-hair")}`}
        />
        <Image
          id="elegant-hair"
          src="/images/hair/elegant.png"
          alt="alpaca elegant hair"
          fill
          className={`object-contain pl-7 pb-3 ${visible("elegant-hair")}`}
        />
        <Image
          id="fancy-hair"
          src="/images/hair/fancy.png"
          alt="alpaca fancy hair"
          fill
          className={`object-contain pl-10 pb-3 ${visible("fancy-hair")}`}
        />
        <Image
          id="earing-accessory"
          src="/images/accessories/earings.png"
          alt="alpaca with earings"
          fill
          className="object-contain pl-5"
          class="hidden"
        />
        <Image
          id="flower-accessory"
          src="/images/accessories/flower.png"
          alt="alpaca with flower on ear"
          fill
          className="object-contain pl-5"
          class="hidden"
        />
        <Image
          id="glasses-accessory"
          src="/images/accessories/glasses.png"
          alt="alpaca with glasses"
          fill
          className="object-contain pl-5"
          class="hidden"
        />
        <Image
          id="headphone-accessory"
          src="/images/accessories/headphone.png"
          alt="alpaca with headphones"
          fill
          className="object-contain pl-5"
          class="visible"
        />
      </div>
    </div>
  );
}

export default AlpacaCanvas;
