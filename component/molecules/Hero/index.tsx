import Atropos from 'atropos/react';
import Style from "./Hero.module.scss"
import 'atropos/css'

const Hero = () => {
  return (
    <section className={Style.hero}>
      <div className="container">
        <div className={Style.grid}>
          <div className={Style.areaTitle}>
            <h1>
              A parceira conectada ao seu&nbsp;
              <strong>planejamento e resultados.</strong>
            </h1>
          </div>
          <div className={Style.illustration}>
            <Atropos className={Style.atropos} shadow={false} highlight={false} rotateTouch={'scroll-y'}>
              <img
                data-atropos-offset="-5"
                draggable={false}
                src="/images/illustration/1.webp"
                alt=""
                className={Style.megaphone}
              />
         
              <img
                data-atropos-offset="1"
                draggable={false}
                src="/images/illustration/3D_.webp"
                alt=""
                className={Style.graphics}
              />
        
              <img
                data-atropos-offset="-5"
                draggable={false}
                src="/images/illustration/Calendar.webp"
                alt=""
                className={Style.calendar}
              />
            </Atropos>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
