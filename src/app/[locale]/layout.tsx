import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.scss";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plesni studio DanceBox",
  description: "Plesni studio DanceBox Split",
};

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) => {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} data-theme="light">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={raleway.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
