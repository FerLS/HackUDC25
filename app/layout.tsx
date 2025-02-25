import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../fonts/fonts";
import LoginChecker from "@/components/loginChecker";

export const metadata: Metadata = {
  title: "CUCA",
  description: "CUCACUCAUCUCAUCA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body
        style={poppins.style}
        className={`dark antialiased overflow-hidden`}
      >
        <LoginChecker>{children}</LoginChecker>
      </body>
    </html>
  );
}
