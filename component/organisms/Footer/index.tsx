/* eslint-disable @next/next/no-img-element */
import { Logo } from "@/component/atoms"
import Style from "./Footer.module.scss"
import Link from "next/link"
import { LiaInstagram } from "react-icons/lia";
import { LiaLinkedinIn } from "react-icons/lia";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className={Style.bgFooter}>
      <div className="container">
        <div className={Style.grid}>
          <div className={Style.address}>
            <Logo />
            <address>
              Av. Caxingui, 234 - Butantã - São Paulo
            </address>
            {/* <div>
              <img src="/images/clientes/meta.png" alt="" width={55} />
              <img src="/images/clientes/MS_Startups_FH_lockup_hrz_OnLght_RGB.png" alt="" width={100} />
            </div> */}

          </div>
          <ul className={Style.link}>
            <li>
              <Link href={'/'}>{t('link.vibezz')}</Link>
            </li>
            <li>
              <Link href={'/parceiros'}>{t('link.segmentos')}</Link>
            </li>

            <li>
              <Link href={'/segmentos'}>{t('link.parceiro')}</Link>
            </li>
            {/* <li>
              <Link href={'/projetos'}>Projetos</Link>
            </li> */}
          </ul>
          <div className={Style.entreEmcontato}>
            <div className={Style.flex}>
              <h2>
                {t('texto1')}
                <motion.div whileHover={{
                  scale: 1.13,
                  transition: { duration: 0.25 }
                }}
                  whileTap={{
                    scale: 1.13,
                    transition: { duration: 0.9 }
                  }}>
                  <Link href="/contato">{t('texto2')}</Link>
                </motion.div>
              </h2>
              <ul>
                <motion.li
                  whileHover={{
                    scale: 1.13,
                    transition: { duration: 0.25 }
                  }}
                  whileTap={{
                    scale: 1.13,
                    transition: { duration: 0.9 }
                  }}>
                  <a aria-label="linkedin" href="https://www.linkedin.com/company/vibezz/mycompany/">
                    <LiaLinkedinIn />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{
                    scale: 1.13,
                    transition: { duration: 0.25 }
                  }}
                  whileTap={{
                    scale: 1.13,
                    transition: { duration: 0.9 }
                  }}>
                  <a aria-label="instagram" href="https://www.instagram.com/vibezz_oficial/">
                    <LiaInstagram />
                  </a>
                </motion.li>
              </ul>

            </div>
            <p>Copyright © {new Date().getFullYear()} Vibezz | Mezzetech Tecnologia da Informação e Marketing LTDA</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
