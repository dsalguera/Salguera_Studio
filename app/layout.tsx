import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import LoadingScreen from "@/components/LoadingScreen";

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
      <body className="m-0 min-h-screen w-full overflow-x-hidden bg-black text-white">
        <LoadingScreen>
          <AnimatedBackground />

          <div className="relative z-10 min-h-screen w-full bg-transparent">
            <Navbar />

            <main className="w-full bg-transparent">
              {children}
            </main>

            <Footer />
          </div>
        </LoadingScreen>
      </body>
    </html>
  );
}