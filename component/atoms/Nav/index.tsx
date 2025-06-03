'use client'

import { motion } from "framer-motion"
import Style from "./Nav.module.scss"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { CgChevronDown } from "react-icons/cg"
import { useTranslations } from "next-intl"
import LocaleSwitcher from "../LocaleSwitcher"

interface NavProps {
  open: boolean
  setOpen?: (value: boolean) => void
}
interface NavItem {
  id: number;
  path: string;
  name?: string;
  submenu?: { path: string, name: string }[];
}

const Nav: React.FC<NavProps> = ({ open }) => {
  const t = useTranslations('menu');
  const b = useTranslations('btn');

  const pathname = usePathname()

  const nav: NavItem[] = [
    { id: 1, path: "/sobre", name: t('vibezz') },
    { id: 2, path: "/clientes", name: t('clientes') },
    {
      id: 3,
      name: t('times'),
      path: "/times",
      submenu: [
        { path: "/times/marketing", name: t('marketing') },
        { path: "/times/dados", name: t('dados') },
      ]
    },
    { id: 4, path: "/segmentos", name: t('segmentos') },
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
                  {link.name}
                </Link>
              ) : (
                <>
                  <span>
                    {t('times')}
                    <CgChevronDown />
                  </span>
                  {link.submenu ? (
                    <ul className={Style.submenu}>
                      {link.submenu.map((sublink) => (
                        <li key={sublink.path}>
                          <Link href={sublink.path}>{sublink.name}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
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
              <Link href="/contato">{b('cta')}</Link>
            </motion.div>
          </li>
          <li><LocaleSwitcher /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav
