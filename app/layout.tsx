import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Header from "@/widgets/header";
import { useMobile } from "@/shared/hooks/server";
import { Providers } from "@/app/provider";
import "@/../styles/global.css";

const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isMobile = useMobile();

  return (
    <html lang="en">
      <body className={lora.className}>
        <Providers>
          <Header isMobile={isMobile} />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
