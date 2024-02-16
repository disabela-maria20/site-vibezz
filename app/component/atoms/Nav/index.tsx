'use client'

import { motion } from "framer-motion"
import Style from "./Nav.module.scss"
import Link from "next/link"
import { usePathname } from 'next/navigation'

interface NavProps {
  open: boolean
  setOpen?: (value: boolean) => void
}

const Nav: React.FC<NavProps> = ({ open }) => {
  const pathname = usePathname()

  const nav = ["/", "/parceiros", "/times", "/seguimentos", "/projetos"]

  return (
    <nav className={`${Style.navBar}`}>
      <div className={`${!open ? Style.open : Style.close}`}>
        <ul>
          {nav.map((link) => (
            <li
              key={link}
               className={`${pathname === link ? Style.active : ""}`}
            >
              <Link href={link}>
                {link === "/" ? "A Vibezz" : link.slice(1)}
              </Link>
            </li>
          ))}

          <motion.li
            className={Style.cta}
            whileHover={{
              scale: 1.13,
              transition: { duration: 0.25 }
            }}
            whileTap={{
              scale: 1.13,
              transition: { duration: 0.9 }
            }}
          >
            <Link href="#contact"> Vamos Conversar</Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
