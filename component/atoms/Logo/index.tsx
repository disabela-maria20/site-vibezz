/* eslint-disable @next/next/no-img-element */
import { Link } from '@/i18n/navigation'
import Style from "./Logo.module.scss"

const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <img
        src="/images/logo.webp"
        alt="Logo nsg"
        width={146}
        height={49}
        className={Style.logo}
      />
    </Link>

  )
}

export default Logo
