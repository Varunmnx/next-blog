import { NavBar } from "@/components"
import "./globals.css"
interface RootLayout {
        children : React.ReactNode
}

export default function RootLayout({ children }: RootLayout ) {
    return (
      <html lang="en">
        <body style={{border:"none",margin:"0px",padding:"none",position:"relative"}}>
          <NavBar/>
          {children}</body>
      </html>
    )
  }