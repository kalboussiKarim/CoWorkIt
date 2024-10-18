import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthWrapper from "@/components/AuthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CoWorkIt App",
  description: "Book a space for your meeting, confrence or creativity",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang="en">
        <body
          className={`${inter.className} bg-nav-bg min-h-screen flex flex-col`}
        >
          <Header />
          <main className="flex-grow max-w-7xl w-full px-4 py-6 sm:px-6 lg:px-8 mx-auto">
            {children}
          </main>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </body>
      </html>
    </AuthWrapper>
  );
}
