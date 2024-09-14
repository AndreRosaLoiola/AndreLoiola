"use client";
import { useEffect } from "react";

interface Landbot {
  Livechat: new (options: { configUrl: string }) => unknown;
}

declare global {
  interface Window {
    Landbot?: Landbot;
    myLandbot?: unknown;
  }
}

const LandbotChat: React.FC = () => {
  useEffect(() => {
    const initLandbot = () => {
      if (window.myLandbot) return;

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
      script.onload = () => {
        if (window.Landbot && typeof window.Landbot.Livechat === "function") {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl:
              "https://storage.googleapis.com/landbot.online/v3/H-2607339-MRPBWR5HNFCTUD5H/index.json",
          });
        }
      };
      document.head.appendChild(script);
    };

    const handleMouseOver = () => {
      initLandbot();
      window.removeEventListener("mouseover", handleMouseOver);
    };

    const handleTouchStart = () => {
      initLandbot();
      window.removeEventListener("touchstart", handleTouchStart);
    };

    window.addEventListener("mouseover", handleMouseOver, { once: true });
    window.addEventListener("touchstart", handleTouchStart, { once: true });

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return null;
};

export default LandbotChat;
