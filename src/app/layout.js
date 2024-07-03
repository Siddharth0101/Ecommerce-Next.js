"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import { Provider } from "react-redux";
import ReduxStore from "./store/reduxStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={ReduxStore}>
        {" "}
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
