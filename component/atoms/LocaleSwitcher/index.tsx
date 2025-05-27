/* eslint-disable @next/next/no-img-element */
'use client'

import { usePathname, useRouter } from "@/i18n/navigation"
import { Locale } from "next-intl"
import Style from './LocaleSwitcher.module.scss'
export default function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locales = [
    {
      code: 'pt',
      name: 'Português',
      flag: '/images/brasil.png'
    },
    {
      code: 'en',
      name: 'English',
      flag: '/images/estados-unidos.png'
    }
  ]

  const switchLocale = (locale: Locale) => {
    router.push(pathname, { locale })
  }

  return (
    <div className={Style.localeSwitcher}>
      {locales.map((locale) => (
        <button
          className={Style.btnCode}
          key={locale.code}
          onClick={() => switchLocale(locale.code)}
          aria-label={`Switch to ${locale.name}`}
        >
          <img src={`${locale.flag}`} alt={locale.name} />
        </button>
      ))}
    </div>
  )
}