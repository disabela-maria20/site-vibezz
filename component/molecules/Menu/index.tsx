'use client'
import { useState } from "react"

import Style from "./Menu.module.scss"
import { Logo, Nav } from "../../atoms"
import useIsMobile from "@/utilities/hooks/useIsMobile"

const Menu = (): JSX.Element => {
  const { isMobile } = useIsMobile()

  const [open, setOpen] = useState<boolean>(!isMobile ? true : false)

  return (
    <div className={Style.bgNav}>
      <div className={Style.container}>
        <div className={Style.flexDeskTop}>
          <div className={Style.flexMobile}>
            <Logo />
            <div className={Style.burger} onClick={() => setOpen(!open)}>
              <span className={`${!open ? Style.active : ""}`}></span>
              <span className={`${!open ? Style.active : ""}`}></span>
              <span className={`${!open ? Style.active : ""}`}></span>
            </div>
          </div>
          <Nav open={!open} setOpen={setOpen}/>
        </div>
      </div>
    </div>
  )
}

export default Menu
