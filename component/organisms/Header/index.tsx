'use client'
import { usePathname } from "next/navigation"
import { Menu } from "../../molecules/"
import Style from "./Header.module.scss"

type Props = {
  children?: React.ReactNode
}

const Header = ({ children }: Props) => {
  const pathname = usePathname()
  
  const verificarHome = pathname !== '/sobre'

  return (
    <>
      <header className={Style.bg_header} style={{backgroundPositionY: verificarHome ? 'center': 'bottom'}}>
        <Menu />
        {children}
      </header>
     {verificarHome && <div className={Style.border}></div>} 
    </>
  )
}

export default Header
