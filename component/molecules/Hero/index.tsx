/* eslint-disable @next/next/no-img-element */
import Style from "./Hero.module.scss"
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className={Style.hero}>
      <div className="container">
        <div className={Style.grid}>
          <Fade duration={1500} direction="left" delay={0.5} className={Style.areaTitle}>
            <h1>
              A parceira conectada ao seu&nbsp;
              <strong>planejamento e resultados.</strong>
            </h1>
          </Fade>
          <Fade duration={1500} direction="right" delay={0.5}>
            <div className={Style.illustration}>
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
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Hero
