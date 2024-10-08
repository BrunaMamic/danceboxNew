import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "../globals.scss";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";

const karlaFont = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plesni studio DanceBox",
  description: "Plesni studio DanceBox Split",
};

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const messages = await getMessages();
  return (
    <html lang={locale} data-theme="light">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={karlaFont.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
