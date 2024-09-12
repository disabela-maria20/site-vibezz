/* eslint-disable @next/next/no-img-element */
import { Fade } from "react-awesome-reveal";
import Style from "./HomeSectionCard.module.scss";

import { ColetaAnaliseDados, ConstrucaoAplicacaoAnalisePesquisa, DataFusionInsightsIntegrados, DesenvolvimentoDataProducts, Design360, DigitalAnalytics, GestaoArquiteturaBancoDados, ImplementacaoDataLakes, PlanejamentoMarca, PlanejamentoMidia, PlanejamentoOmnichannel, SocialMedia, StorytellingDados } from "@/component/atoms";
import { useState } from "react";
import { BiArrowBack, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const HomeSectionCard = () => {
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
      title: "Planejamento de marca de Marca",
      icon: <PlanejamentoMarca />,
      description:
        "Desvende seu diferencial competitivo e domine seu nicho de mercado, construindo uma marca autêntica e memorável que conquista clientes.",
    },
    {
      id: 2,
      title: "Plano de canais omnichannel",
      icon: <PlanejamentoOmnichannel />,
      description:
        "Mapeie a jornada do cliente e alcance-o em cada etapa e onde quer que ele esteja, criando um plano personalizado para impulsionar as métricas ideias de cada canal e/ou audiência.",
    },
    {
      id: 3,
      title: "Design 360º",
      icon: <Design360 />,
      description:
        "Soluções criativas para diferentes necessidades, que busca uma metodologia de conexão para as múltiplas necessidades e canais, indo desde o objetivo, as audiências e resultados que precisamos ter com o conteúdo."
    },
    {
      id: 4,
      title: "Social Media",
      icon: <SocialMedia />,
      description:
        "Criamos histórias que atraem, educam e convertem seu público, exploramos diversos conceitos e formatos para atender às diferentes necessidades das audiências em suas diferentes jornadas."
    },
    {
      id: 5,
      title: "Planejamento de Mídia",
      icon: <PlanejamentoMidia />,
      description:
        "Base de todo o nosso racional é a performance do produto, respeitando suas características e enxergando oportunidades, equalizamos os canais a partir da jornada e funil, criando modelos de atribuição de acordo com nossa estratégia"
    },
    {
      id: 6,
      title: "Digital Analytics",
      icon: <DigitalAnalytics />,
      description:
        "Com a visão macro de toda a estratégia, funcionamento dos canais e execução, nosso time visa buscar os principais insights de todas as frentes e conectá-las diretamente ao negócio. "
    },
  ];

  const Dados = [
    {
      id: 1,
      title: "Coleta e análise de Dados",
      icon: <ColetaAnaliseDados />,
      description:
        "A partir de inúmeras coletas vindas de diferentes fontes, mapeamos os dados referentes a consumo e comportamento de vendas. Assim, podemos buscar um entendimento 360, dos seus usuários e até mesmo mercado.",
    },
    {
      id: 2,
      title: "Data Fusion e Insights Integrados",
      icon: <DataFusionInsightsIntegrados />,
      description:
        "Unificamos bases de dados de diferentes canais e as cruzamos, a partir de tratamento desses dados, interpretamos suas funções, características e como podem se complementar.",
    },
    {
      id: 3,
      title: "Construção, Aplicação e Análise de Pesquisa",
      icon: <ConstrucaoAplicacaoAnalisePesquisa />,
      description:
        "A partir de diferentes oportunidades, que vão desde a descoberta de potenciais públicos, ou até mesmo seu aprofundamento, até a validação de campanhas e produtos, buscamos conectar aplicações de pesquisas a dados.",
    },
    {
      id: 4,
      title: "Gestão e Arquitetura de Banco de Dados",
      icon: <GestaoArquiteturaBancoDados />,
      description:
        "A quantidade de dados que são gerados por sistemas e diferentes ambientes muitas vezes precisam ser geridos da melhor forma em diversos pontos de vista. Para isso nosso time apoia em toda essa camada de gestão de Data Warehouse para que dados sejam ágeis, fáceis e seguros.",
    },
    {
      id: 5,
      title: "Desenvolvimento de Data Products",
      icon: <DesenvolvimentoDataProducts />,
      description: "A partir dos negócios e propósito dos nossos clientes, temos times habilitados a desenvolver diferentes produtos de análise de dados para múltiplos objetivos e canais"
    },
    {
      id: 6,
      title: "Implementação de Data Lakes:",
      icon: <ImplementacaoDataLakes />,
      description:
        "Toda a arquitetura, implantação e governança de big data passa por nosso time que escala todos esses bancos e os conecta a um data lake. "
    },
    {
      id: 7,
      title: "Storytelling com Dados",
      icon: <StorytellingDados />,
      description:
        'Quanto mais dados temos, mais históricas precisamos construir e interpretar. Pensando nisso temos times especializados em data view para essa construção de dashboards. '
    },
  ];


  return (
    <>
      <section className={Style.marketing}>
        <div className={Style.grid}>
          <Fade direction="left" className={Style.title}>
            <h2>
              <span>Núcleo</span>
              <strong>Marketing</strong>
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
              <span>Núcleo</span>
              <strong>Data e Tech</strong>
            </h2>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default HomeSectionCard;
