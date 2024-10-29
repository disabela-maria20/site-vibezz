/* eslint-disable @next/next/no-img-element */
import Style from "./Hero.module.scss"
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className={Style.hero}>
      <div className="container">
        <div className={Style.grid}>
          <Fade duration={1500} direction="up" delay={0.5} className={Style.areaTitle}>
            <h1>
              A parceira conectada ao seu&nbsp;
              <strong>planejamento</strong> e <strong>resultados.</strong>
            </h1>
          </Fade>
        
        </div>
      </div>
    </section>
  )
}

export default Hero
