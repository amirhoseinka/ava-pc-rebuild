"use client";

import { store } from "@/app/redux/store";
import { Provider } from "react-redux";

import { usePathname } from "next/navigation";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideHeaderAndFooterForLogin = pathname === "/login" ? false : true
  const hideHeaderAndFooterForRegister = pathname === "/register" ? false : true
  return <Provider store={store}>
    {hideHeaderAndFooterForLogin && hideHeaderAndFooterForRegister && <Header/>}
    {children}
    {hideHeaderAndFooterForLogin && hideHeaderAndFooterForRegister && <Footer/>}
    </Provider>;
}
