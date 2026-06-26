import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata = {
  title: "DSM Studio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="bg-black text-white overflow-x-hidden">
        {/* Background */}
        <AnimatedBackground />
        <Navbar />

        {children}

      </body>

    </html>
  );
}