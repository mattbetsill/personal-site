import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matt Betsill",
  description: "Just another personal site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=DM+Serif+Display:ital@0;1&family=Orbitron:wght@400..900&family=Sofia+Sans+Extra+Condensed:wght@100&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
