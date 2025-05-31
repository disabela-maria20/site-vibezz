"use client";

import { useEffect } from 'react';
import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition';
import { useLocale } from 'next-intl';
import Style from "./Contato.module.scss";
function Contato() {
  const currentLocale = useLocale()
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "45256589",
          formId: "ff8b0dd9-9267-4d4e-adfa-40d59fbc3be5",
          target: '#hubspot-form-container'
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (currentLocale == 'pt') {
    return <>
      <Header />
      <div className='container'>
        <div id="hubspot-form-container"></div>
      </div>
      <Footer />
    </>
  }

  return <>
    <Header />
    <section className={Style.contact}>
      <div className="container">
        <h1>Contact Us</h1>
        <div className={Style.grid}>
          <div>
            <h2>New Business:</h2>
            <a href="mailto:comercial@vibezz.com">comercial@vibezz.com </a>
          </div>
          <div>
            <h2>Carreiras:</h2>
            <a href="mailto:comercial@vibezz.com">contato@vibezz.com </a>
          </div>
        </div>
        <div className={Style.grid}>
          <div>
            <h2>Our Office: </h2>
            <address>
              <p>São Paulo, Brazil </p>
              <p>Av Caxingui, 234 </p>
              <p>Vila Pirajussara </p>
              <p>CEP: 05579-000</p>
            </address>
          </div>

        </div>
      </div>
    </section>
    <Footer />
  </>
}

export default transition(Contato);
