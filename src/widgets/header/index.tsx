"use client";

import dynamic from "next/dynamic";
import { useDesktopSize } from "@/shared/hooks";

const MobileHeader = dynamic(() => import("./mobile"));
const DesktopHeader = dynamic(() => import("./desktop"));

const Header = ({ isMobile }: { isMobile: boolean }) => {
  const isDesktop = useDesktopSize();

  if (isMobile || (!isDesktop && isDesktop !== null)) {
    return <MobileHeader />;
  } else {
    return <DesktopHeader />;
  }
};

export default Header;
