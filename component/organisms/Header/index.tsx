'use client'
import { usePathname } from "next/navigation"
import { Menu } from "../../molecules/"
import Style from "./Header.module.scss"

type Props = {
  children?: React.ReactNode
}

const Header = ({ children }: Props) => {
  const pathname = usePathname()
  const isHome = pathname === '/' ||
    pathname === '/en' ||
    pathname === '/pt' ||
    pathname === '/en/' ||
    pathname === '/pt/'


  return (
    <>
      <header className={Style.bg_header} style={{ backgroundPositionY: !isHome ? 'center' : 'bottom' }}>
        <Menu />
        {children}
      </header>
      {!isHome && <div className={Style.border}></div>}
    </>
  )
}

export default Header
