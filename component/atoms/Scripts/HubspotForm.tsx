'use client';

import React, { useEffect } from 'react';

const HubspotForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      if (window?.hbspt) {
        window?.hbspt.forms.create({
          region: "na1",
          portalId: "45256589",
          formId: "ff8b0dd9-9267-4d4e-adfa-40d59fbc3be5"
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div id="hubspotFormContainer"></div>
};

export default HubspotForm;
