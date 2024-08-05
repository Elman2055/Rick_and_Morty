import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    const device = new UAParser(ua).getDevice();
    setIsMobile(device.type === "mobile");
  }, []);

  return isMobile;
};

export default useMobile;
