import { userAgent } from "next/server";
import { useState, useEffect } from "react";

const useDeviceDetect = (): string => {
  const [device, setDevice] = useState<string>("desktop");

  useEffect(() => {
    const useAgent = navigator.userAgent;
    const isMobile =
      /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|OperaMini/i.test(
        userAgent
      );
    setDevice(isMobile ? "mobile" : "desktop");
  }, [device]);

  return device;
};

export default useDeviceDetect;
