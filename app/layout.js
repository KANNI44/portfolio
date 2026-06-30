import "./globals.css";
import { Space_Grotesk, Climate_Crisis } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  variable: "--font-climate-crisis",
});

export const metadata = {
  title: "Kanishak Choudhary — Full Stack Developer",
  description:
    "Full stack developer portfolio — React, Next.js, Tailwind, Node.js, MongoDB.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${climateCrisis.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
