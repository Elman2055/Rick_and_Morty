import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Header from "@/widgets/header";
import { NextIntlClientProvider } from "next-intl";
import {
  getLocale,
  getMessages,
  unstable_setRequestLocale,
} from "next-intl/server";
import { useMobile } from "@/shared/hooks/server";
import { Providers } from "@/app/provider";
import "@/../styles/global.css";

const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) => {
  unstable_setRequestLocale(params?.locale);
  const locale = await getLocale();
  const messages = await getMessages();

  const isMobile = useMobile();

  return (
    <html lang={locale}>
      <body className={lora.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header isMobile={isMobile} />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
