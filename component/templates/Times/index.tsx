"use client"

import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition'
import Style from "./Times.module.scss";
import { Title } from '@/component/atoms';
import { MARKETING } from './array';

function Times() {
  return (
    <>
      <Header />
      <section className={Style.times}>
        <Title>Times</Title>
        <div className={Style.Marketing}>
          <div className='container'>
            <div className={Style.grid}>
              {MARKETING.map((data) => (
                <>
                  <div className={Style.div1}>
                    <img src={data.img} />
                  </div>
                  <div className={Style.div2}>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                  </div>
                  <div className={Style.div3}>
                    {data.data.map((data) => (
                      <div>
                        <img src={data.img} />
                        <div>
                          <h3>{data.title}</h3>
                          <p>{data.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ))}

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default transition(Times);