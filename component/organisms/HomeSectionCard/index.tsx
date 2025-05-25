/* eslint-disable @next/next/no-img-element */
import { Fade } from "react-awesome-reveal";
import Style from "./HomeSectionCard.module.scss";

import { ColetaAnaliseDados, ConstrucaoAplicacaoAnalisePesquisa, DataFusionInsightsIntegrados, DesenvolvimentoDataProducts, Design360, DigitalAnalytics, GestaoArquiteturaBancoDados, ImplementacaoDataLakes, PlanejamentoMarca, PlanejamentoMidia, PlanejamentoOmnichannel, SocialMedia, StorytellingDados } from "@/component/atoms";
import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useTranslations } from "next-intl";

const HomeSectionCard = () => {
  const t = useTranslations('inicio');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [currentSlideDados, setCurrentSlideDados] = useState(0);
  const [loadedDados, setLoadedDados] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 720px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 990px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1400px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1, spacing: 100 },
    slideChanged(slider) {


      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [dadosSliderRef, dadosInstanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": { slides: { perView: 1, spacing: 5 } },
      "(min-width: 720px)": { slides: { perView: 2, spacing: 10 } },
      "(min-width: 990px)": { slides: { perView: 3, spacing: 10 } },
      "(min-width: 1400px)": { slides: { perView: 4, spacing: 10 } },
    },
    slides: { perView: 1, spacing: 100 },
    slideChanged(slider) {
      setCurrentSlideDados(slider.track.details.rel);
    },
    created() {
      setLoadedDados(true);
    },
  });
  const Marketing = [
    {
      id: 1,
      title: t('areaMarketing.card.titulo1'),
      icon: <PlanejamentoMarca />,
      description: t('areaMarketing.card.texto1'),
    },
    {
      id: 2,
      title: t('areaMarketing.card.titulo2'),
      icon: <PlanejamentoOmnichannel />,
      description: t('areaMarketing.card.texto2'),
    },
    {
      id: 3,
      title: t('areaMarketing.card.titulo3'),
      icon: <Design360 />,
      description: t('areaMarketing.card.texto3'),
    },
    {
      id: 4,
      title: t('areaMarketing.card.titulo4'),
      icon: <SocialMedia />,
      description: t('areaMarketing.card.texto4'),
    },
    {
      id: 5,
      title: t('areaMarketing.card.titulo5'),
      icon: <PlanejamentoMidia />,
      description: t('areaMarketing.card.texto5'),
    },
    {
      id: 6,
      title: t('areaMarketing.card.titulo6'),
      icon: <DigitalAnalytics />,
      description: t('areaMarketing.card.texto6'),
    },
  ];

  const Dados = [
    {
      id: 1,
      title: t('areaDataeTech.card.titulo1'),
      icon: <ColetaAnaliseDados />,
      description: t('areaDataeTech.card.texto1'),
    },
    {
      id: 2,
      title: t('areaDataeTech.card.titulo2'),
      icon: <DataFusionInsightsIntegrados />,
      description: t('areaDataeTech.card.texto2'),
    },
    {
      id: 3,
      title: t('areaDataeTech.card.titulo3'),
      icon: <ConstrucaoAplicacaoAnalisePesquisa />,
      description: t('areaDataeTech.card.texto3'),
    },
    {
      id: 4,
      title: t('areaDataeTech.card.titulo4'),
      icon: <GestaoArquiteturaBancoDados />,
      description: t('areaDataeTech.card.texto4'),
    },
    {
      id: 5,
      title: t('areaDataeTech.card.titulo5'),
      icon: <DesenvolvimentoDataProducts />,
      description: t('areaDataeTech.card.texto5'),
    },
    {
      id: 6,
      title: t('areaDataeTech.card.titulo6'),
      icon: <ImplementacaoDataLakes />,
      description: t('areaDataeTech.card.texto6'),
    },

  ];


  return (
    <>
      <section className={Style.marketing}>
        <div className={Style.grid}>
          <Fade direction="left" className={Style.title}>
            <h2>
              <span>{t('areaMarketing.titulo')}</span>
              <strong>{t('areaMarketing.subTitulo')}</strong>
            </h2>
          </Fade>
          <div className={Style.navigation}>
            {instanceRef.current && loaded && <div className={Style.arrow} >
              <button
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                disabled={currentSlide === 0}>
                <BiLeftArrowAlt />
              </button>

              <button
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                // @ts-ignore
                disabled={currentSlide === instanceRef.current.options.slides.perView}
              >
                <BiRightArrowAlt />
              </button>
            </div>}

            <section ref={ref} className="keen-slider">
              {Marketing.map((data) => (
                <div className={`keen-slider__slide ${Style.itemSlide}`} key={data.id}>
                  <div className={Style.card} >
                    <i>
                      {data.icon}
                    </i>
                    <h3>{data.title}</h3>
                    <hr />
                    <p>{data.description}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </section>
      <section className={Style.mercado}>
        <div className={Style.grid}>
          <div className={Style.navigation}>
            {dadosInstanceRef.current && loadedDados && <div className={Style.arrow} >
              <button
                onClick={(e: any) => e.stopPropagation() || dadosInstanceRef.current?.prev()}
                disabled={currentSlideDados === 0}
              ><BiLeftArrowAlt />
              </button>
              <button
                onClick={(e: any) => e.stopPropagation() || dadosInstanceRef.current?.next()}
                // @ts-ignore
                disabled={currentSlideDados === dadosInstanceRef.current.options.slides.perView}>
                <BiRightArrowAlt />
              </button>
            </div>}
            <section ref={dadosSliderRef} className="keen-slider">
              {Dados.map((data) => (
                <div className={`keen-slider__slide ${Style.itemSlide}`} key={data.id}>
                  <div className={Style.card} >
                    <i>
                      {data.icon}
                    </i>
                    <h3>{data.title}</h3>
                    <hr />
                    <p>{data.description}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <Fade direction="right" className={Style.title}>
            <h2>
              <span>{t('areaDataeTech.titulo')}</span>
              <strong>{t('areaDataeTech.subTitulo')}</strong>
            </h2>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default HomeSectionCard;
