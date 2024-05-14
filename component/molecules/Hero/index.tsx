import Style from "./Hero.module.scss"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useView } from "@/utilities/hooks/useView"

const Hero = () => {
  const container = useRef(null)
  const { control } = useView(container)

  const animate = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5} },
    hidden: { opacity: 0, y: '100%' },
    exit: { opacity: .7, y: '0', transition: { duration: 0.5 } }
  }

  return (
    <section className={Style.hero} ref={container}>
      <div className="container">
        <div className={Style.grid}>
          <div className={Style.areaTitle}>
            <motion.h1
              variants={animate}
              initial="show"
              animate={control}
            >
              A parceira conectada ao seu&nbsp;
              <strong>planejamento e resultados.</strong>
            </motion.h1>
          </div>
          <motion.div
            variants={animate}
            initial="show"
            animate={control}
            className={Style.illustration}>
            <img
              src="/images/illustration/1.webp"
              alt=""
              className={Style.megaphone}
            />
            <img
              src="/images/illustration/3D_.webp"
              alt=""
              className={Style.graphics}
            />
            <img
              src="/images/illustration/Calendar.webp"
              alt=""
              className={Style.calendar}
            />

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
