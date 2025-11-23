import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Aditya M | Portfolio",
  description: "Portfolio for Aditya M — full-stack developer focused on secure, intelligent web experiences.",
  keywords: ["Aditya M", "portfolio", "full stack", "security", "AI", "Next.js"],
  authors: [{ name: "Aditya M" }],
  themeColor: "#0f172a",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aditya-portfolio.com",
    title: "Aditya M | Portfolio",
    description: "Portfolio for Aditya M — full-stack developer focused on secure, intelligent web experiences.",
    siteName: "Aditya M Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya M | Portfolio",
    description: "Portfolio for Aditya M — full-stack developer focused on secure, intelligent web experiences.",
    creator: "@aditya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased bg-slate-900 text-slate-100">
        <Providers>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#1e293b',
                color: '#fff',
                border: '1px solid #334155',
                borderRadius: '0.5rem',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
