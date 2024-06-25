'use client'

import { motion, stagger, useAnimate } from "framer-motion"
import Style from "./Nav.module.scss"
import Link from "next/link"
import { usePathname } from 'next/navigation'

interface NavProps {
  open: boolean
  setOpen?: (value: boolean) => void
}

const Nav: React.FC<NavProps> = ({ open }) => {
  const pathname = usePathname()
  const nav = ["/sobre", "/parceiros", "/times", "/seguimentos", "/projetos"]

  return (
    <nav className={`${Style.navBar}`}>
      <div className={`${Style.navDiv} ${open ? Style.open : Style.close}`}>
        <ul>
          {nav.map((link) => (
            <li
              key={link}
               className={`${pathname === link ? Style.active : ""}`}
            >
              <Link href={link}>
                {link === "/" || link === "/sobre" ? "A Vibezz" : link.slice(1)}
              </Link>
            </li>
          ))}
          <li className={Style.cta}>
            <motion.div whileHover={{
              scale: 1.13,
              transition: { duration: 0.25 }
            }}
              whileTap={{
                scale: 1.13,
                transition: { duration: 0.9 }
              }}>
              <a href="https://share.hsforms.com/1_4sN2ZJnTU6t-kDVn7w75Qqy07h" target="_blank"> Vamos Conversar</a>
            </motion.div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
