import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Header from "@/widgets/header";
import { useMobile } from "@/shared/hooks/server";
import { StoreProvider } from "@/app/provider";
import { NextIntlProvider } from "@/app/provider";
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
  params: any;
}>) => {
  const isMobile = useMobile();

  return (
    <html lang="en">
      <body className={lora.className}>
        <StoreProvider>
          <NextIntlProvider>
            <Header isMobile={isMobile} />
            {children}
          </NextIntlProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
