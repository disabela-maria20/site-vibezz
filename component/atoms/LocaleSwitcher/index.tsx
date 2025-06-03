/* eslint-disable @next/next/no-img-element */
'use client'

import { usePathname, useRouter } from "@/i18n/navigation"
import { useLocale } from "next-intl"
import { Locale } from "next-intl"
import Style from './LocaleSwitcher.module.scss'
export default function LocaleSwitcher() {

  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const locales = [
    {
      code: 'en',
      name: 'English',
      flag: '/images/estados-unidos.png'
    },
    {
      code: 'pt',
      name: 'Português',
      flag: '/images/brasil.png'
    }
  ]

  const switchLocale = (locale: Locale) => {
    router.push(pathname, { locale })
  }

  return (
    <div className={Style.localeSwitcher}>
      {locales.map((locale) => (
        <button
          className={`${Style.btnCode} ${currentLocale === locale.code ? Style.active : ''}`}
          key={locale.code}
          onClick={() => switchLocale(locale.code)}
          aria-label={`Switch to ${locale.name}`}
        >
          <span>{locale.code}</span>
        </button>
      ))}
    </div>
  )
}