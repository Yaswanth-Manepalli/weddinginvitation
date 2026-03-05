import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface BackgroundMusicProps {
  shouldPlay: boolean;
}

const BackgroundMusic = ({ shouldPlay }: BackgroundMusicProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        // Autoplay blocked, user will need to interact
      });
    }
  }, [shouldPlay]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!shouldPlay) return null;

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src=""
      />
      
    </>
  );
};

export default BackgroundMusic;
