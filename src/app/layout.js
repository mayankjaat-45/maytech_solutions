import Script from "next/script";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export const metadata = {
  title: {
    default: "MayTech Solutions | Website Development Agency",
    template: "%s | MayTech Solutions",
  },
  description:
    "MayTech Solutions builds modern, responsive and SEO-friendly websites using Next.js, React.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
        <FloatingWhatsApp />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DDCWP02K33"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());
            gtag("config", "G-DDCWP02K33");
          `}
        </Script>
      </body>
    </html>
  );
}
