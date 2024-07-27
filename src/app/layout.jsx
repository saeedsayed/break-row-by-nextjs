import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import ToTopButton from "@/components/common/ToTopButton";
import Footer from "@/components/common/Footer";
import MainNavbar from "@/components/common/MainNavbar";
import WhatsappButton from "@/components/common/WhatsappButton";
import AnimateWrapper from "@/components/common/AnimateWrapper";
// import { Footer, ToTopButton } from "@/components/common";

// const roboto = Roboto({weight:['100','300','400','500','700','900'], subsets: ['latin'] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body suppressHydrationWarning>
        <AnimateWrapper>
          <MainNavbar />
          {children}
          <Footer />
          <ToTopButton />
          <WhatsappButton />
        </AnimateWrapper>
      </body>
    </html>
  );
}
