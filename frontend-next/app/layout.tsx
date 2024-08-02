import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionAuthProvider from "@/hooks/SessionAuthProvider";
import { ModalProviders } from "@/hooks/modal-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Technical Test Lexart",
  description: "Author by Sebastian Martinez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionAuthProvider>
          {children}
          <ModalProviders />
        </SessionAuthProvider>
      </body>
    </html>
  );
}
