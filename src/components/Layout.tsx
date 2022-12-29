// ---- Fonts
import { Roboto } from "@next/font/google";

import React from "react";
import Navbar from "./Navbar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const Layout = ({ children }: any) => {
  return (
    <main>
      <Navbar></Navbar>
      {children}
    </main>
  );
};

export default Layout;
