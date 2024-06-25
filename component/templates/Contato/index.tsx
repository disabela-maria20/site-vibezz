"use client";

import { useEffect } from 'react';
import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition';

function Contato() {

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

  return (
    <>
      <Header />
      <div className='container'>
        <div id="hubspot-form-container"></div>
      </div>
      <Footer />
    </>
  );
}

export default transition(Contato);
