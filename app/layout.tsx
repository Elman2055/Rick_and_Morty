import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/widgets/header";
import { useMobile } from "@/shared/hooks/server";
import "@/../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isMobile = useMobile();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header isMobile={isMobile} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
