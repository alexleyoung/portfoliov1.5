import type { Metadata } from "next";
import { Montserrat as FontMontserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import Header from "@/components/shared/header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/shared/footer";
import { ModeToggle } from "@/theme/mode-toggler";
import ActiveSectionContextProvider from "@/stores/active-section/active-section-context";

export const metadata: Metadata = {
  title: "Alex Young | Portfolio",
  description:
    "Alex Young's personal portfolio. Built using TypeScript, Next.js 14, Framaer Motion and Tailwind CSS.",
};

const fontMontserrat = FontMontserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={cn(
          "flex justify-center items-center relative",
          fontMontserrat.className
        )}>
        <div className='flex flex-col min-h-screen w-full px-12 lg:px-0'>
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='light'
              enableSystem
              disableTransitionOnChange>
              <Header />
              {children}
              <Footer />
              {/* dark mode toggle; enable when fixed */}
              {/* <div className='fixed top-1 left-1 sm:left-6 sm:bottom-6 sm:top-auto right-auto z-[99]'>
                <ModeToggle />
              </div> */}
              <Toaster position='top-right' />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
