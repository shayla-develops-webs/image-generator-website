import AlpacaCanvas from "@/app/components/AlpacaCanvas";
import AccessoryPanel from "@/app/components/AccessoryPanel";
import StyleOptions from "@/app/components/StyleOptions";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <h1 className="font-mono text-7xl text-orange-400">
        Shayla's Alpaca Image Generator
      </h1>
      <div className="flex gap-20">
        <AlpacaCanvas className="flex-shrink-0" />
        <div className="flex flex-col gap-4">
          <AccessoryPanel />
          <StyleOptions />
        </div>
      </div>
    </div>
  );
}
