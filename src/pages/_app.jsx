import React from "react";
import { UserAuthContextProvider } from "@/Components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      <Component {...pageProps} />
    </UserAuthContextProvider>
  );
}
