'use client'

import { motion, stagger, useAnimate } from "framer-motion"
import Style from "./Nav.module.scss"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { CgChevronDown } from "react-icons/cg"

interface NavProps {
  open: boolean
  setOpen?: (value: boolean) => void
}
interface NavItem {
  id: number;
  path: string;
  submenu?: { title: string; path: string }[];
}

const Nav: React.FC<NavProps> = ({ open }) => {
  const pathname = usePathname()
  const nav: NavItem[] = [
    { id: 1, path: "/sobre" },
    { id: 2, path: "/clientes" },
    {
      id: 3,
      path: "/times",
      submenu: [
        { title: "Marketing", path: "/times/marketing" },
        { title: "Dados", path: "/times/dados" }
      ]
    },
    { id: 4, path: "/segmentos" },
    // { id: 5, path: "/projetos" }
  ];
  return (
    <nav className={`${Style.navBar}`}>
      <div className={`${Style.navDiv} ${open ? Style.open : Style.close}`}>
        <ul>
          {nav.map((link) => (
            <li
              key={link.id}
              className={`${pathname === link.path ? Style.active : ""}`}
            >
              {link.path !== "/times" ? (
                <Link href={link.path}>
                  {link.path === "/" || link.path === "/sobre" ? "A Vibezz" : link.path.slice(1)}
                </Link>
              ) : (
                <>
                  <span>
                    Times
                    <CgChevronDown />
                  </span>
                  {link.submenu && (
                    <ul className={Style.submenu}>
                      {link.submenu.map((sublink) => (
                        <li key={sublink.path}>
                          <Link href={sublink.path}>{sublink.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
          <li className={Style.cta}>
            <motion.div
              whileHover={{
                scale: 1.13,
                transition: { duration: 0.25 }
              }}
              whileTap={{
                scale: 1.13,
                transition: { duration: 0.9 }
              }}>
              <Link href="/contato"> Vamos Conversar?</Link>
            </motion.div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav
