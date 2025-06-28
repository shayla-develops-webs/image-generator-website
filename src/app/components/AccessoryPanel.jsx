function AccessoryPanel({ onShowOptions }) {
  return (
    <div>
      <h3 className="font-mono">Accessorize Your Alpaca</h3>
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => onShowOptions("nose")}
          class="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Nose
        </button>
        <button
          onClick={() => onShowOptions("hair")}
          class="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Hair
        </button>
        <button
          onClick={() => onShowOptions("ears")}
          className="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Ears
        </button>
        <button
          onClick={() => onShowOptions("eyes")}
          className="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Eyes
        </button>
        <button
          onClick={() => onShowOptions("mouth")}
          className="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Mouth
        </button>
        <button
          onClick={() => onShowOptions("neck")}
          className="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Neck
        </button>
        <button
          onClick={() => onShowOptions("leg")}
          className="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Leg
        </button>
        <button
          onClick={() => onShowOptions("accessories")}
          className="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Accessories
        </button>
        <button
          onClick={() => onShowOptions("background")}
          className="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Background
        </button>
      </div>
    </div>
  );
}
export default AccessoryPanel;
