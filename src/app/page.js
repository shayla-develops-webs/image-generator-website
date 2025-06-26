import AlpacaCanvas from "@/app/components/AlpacaCanvas";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <h1 className="font-mono text-7xl text-orange-400">
        Shayla's Alpaca Website Generator
      </h1>
      <AlpacaCanvas />
    </div>
  );
}
