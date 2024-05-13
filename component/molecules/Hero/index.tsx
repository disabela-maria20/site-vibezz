import { MouseParallax } from "react-just-parallax"
import Style from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={Style.hero}>
      <div className="container" style={{ overflow: 'hidden' }}>
        <div className={Style.grid}>
          <div className={Style.areaTitle}>
            <h1>
              A parceira conectada ao seu&nbsp;
              <strong>planejamento e resultados.</strong>
            </h1>
          </div>
          <div className={Style.illustration}>
            <MouseParallax enableOnTouchDevice zIndex={2} strength={0.16} lerpEase={0.17}>
              <img
                src="/images/illustration/1.webp"
                alt=""
                className={Style.megaphone}
              />
            </MouseParallax>
            <MouseParallax enableOnTouchDevice>
              <img
                src="/images/illustration/3D_.webp"
                alt=""
                className={Style.graphics}
              />
            </MouseParallax>
            <MouseParallax enableOnTouchDevice zIndex={2} strength={0.29} lerpEase={0.1}>
              <img
                src="/images/illustration/Calendar.webp"
                alt=""
                className={Style.calendar}
              />
            </MouseParallax>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
