import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <div style={{ paddingTop: "70px" }}>{children}</div> {/* Prevent overlap */}
        <Footer />
      </body>
    </html>
  );
}
