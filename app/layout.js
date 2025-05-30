import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Career-Coach",
  description: "ai career guide",
};

export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider
    

  >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo1.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p className="font-bold text-lg tracking-wider">All rights are reserved  &copy; </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
      </ClerkProvider>
    
  );
}