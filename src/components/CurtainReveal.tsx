import { useState } from "react";
import curtainTexture from "@/assets/curtain-texture.jpg";

interface CurtainRevealProps {
  onOpen: () => void;
}

const CurtainReveal = ({ onOpen }: CurtainRevealProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 cursor-pointer" onClick={handleOpen}>
      {/* Left curtain */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 ${isOpening ? "animate-curtain-left" : ""}`}
        style={{
          backgroundImage: `url(${curtainTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
      </div>

      {/* Right curtain */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 ${isOpening ? "animate-curtain-right" : ""}`}
        style={{
          backgroundImage: `url(${curtainTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          transform: "scaleX(-1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" style={{ transform: "scaleX(-1)" }} />
      </div>

      {/* Center text */}
      {!isOpening && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center animate-pulse-gold">
            <p className="font-display text-cream text-sm md:text-base tracking-[0.3em] uppercase mb-4 drop-shadow-lg">
              You are cordially invited
            </p>
            <h1 className="font-script text-gold-light text-5xl md:text-7xl drop-shadow-lg mb-6">
              Wedding Invitation
            </h1>
            <p className="font-body text-cream/80 text-lg md:text-xl tracking-widest drop-shadow-md">
              ✦ Tap to Open ✦
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurtainReveal;
