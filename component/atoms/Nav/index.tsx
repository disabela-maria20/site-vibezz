'use client'

import { motion } from "framer-motion"
import Style from "./Nav.module.scss"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const Nav: React.FC = () => {
  const pathname = usePathname()

  const nav = ["/", "/parceiros", "/times", "/seguimentos", "/projetos"]

  return (
    <>
      <nav className={`${Style.navBar}`}>
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
          <li className={Style.cta}>
            <motion.div whileHover={{
              scale: 1.13,
              transition: { duration: 0.25 }
            }}
              whileTap={{
                scale: 1.13,
                transition: { duration: 0.9 }
              }}>
              <Link href="#contact"> Vamos Conversar</Link>
            </motion.div>

          </li>
        </ul>
      </nav>
    </>

  )
}

export default Nav
