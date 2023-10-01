import "./globals.css";
import { Header } from "components/ui/Header";
import { Footer } from "components/ui/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen flex flex-col bg-[#ebebeb] dark:bg-gray-700 m-0 p-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
