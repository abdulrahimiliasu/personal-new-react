import React from "react"
import "./layout.css"
import { Header } from "../header/Header"

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
