import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
