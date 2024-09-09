/* eslint-disable @next/next/no-img-element */
import { Fade } from "react-awesome-reveal";
import Style from "./HomeSectionCard.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const HomeSectionCard = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 990px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1400px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: {
      perView: 1,
      spacing: 100
    },
  })

  const Marketing = [
    {
      id: 1,
      title: "marca",
      icon: "icon",
      description:
        "Desvende seu diferencial competitivo e domine seu nicho de mercado, construindo uma marca autêntica e memorável que conquista clientes.",
    },
    {
      id: 2,
      title: "omnichannel",
      icon: "icon",
      description:
        "Mapeie a jornada do cliente e alcance-o em cada etapa e onde quer que ele esteja, criando um plano personalizado para impulsionar as métricas ideias de cada canal e/ou audiência.",
    },
    {
      id: 3,
      title: "Design 360º",
      icon: "icon",
      description:
        "Criamos histórias que atraem, educam e convertem seu público, exploramos diversos conceitos e formatos para atender às diferentes necessidades das audiências em suas diferentes jornadas. ",
    },
    {
      id: 4,
      title: "Mídia",
      icon: "icon",
      description:
        "Base de todo o nosso racional é a performance do produto, respeitando suas características e enxergando oportunidades, equalizamos os canais a partir da jornada e funil, criando modelos de atribuição de acordo com nossa estratégia",
    },
  ];

  const Dados = [
    {
      id: 1,
      title: "Coleta e análise de Dados",
      icon: "icon",
      description:
        "A partir de inúmeras coletas vindas de diferentes fontes, mapeamos os dados referentes a consumo e comportamento de vendas. Assim, podemos buscar um entendimento 360, dos seus usuários e até mesmo mercado.",
    },
    {
      id: 2,
      title: "Data Fusion e Insights Integrados",
      icon: "icon",
      description:
        "Unificamos bases de dados de diferentes canais e as cruzamos, a partir de tratamento desses dados, interpretamos suas funções, características e como podem se complementar.",
    },
    {
      id: 3,
      title: "Construção, Aplicação e Análise de Pesquisa",
      icon: "icon",
      description:
        "A partir de diferentes oportunidades, que vão desde a descoberta de potenciais públicos, ou até mesmo seu aprofundamento, até a validação de campanhas e produtos, buscamos conectar aplicações de pesquisas a dados.",
    },
    {
      id: 4,
      title: "Gestão e Arquitetura de Banco de Dados",
      icon: "icon",
      description:
        "A quantidade de dados que são gerados por sistemas e diferentes ambientes muitas vezes precisam ser geridos da melhor forma em diversos pontos de vista. Para isso nosso time apoia em toda essa camada de gestão de Data Warehouse para que dados sejam ágeis, fáceis e seguros.",
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
          <section ref={ref} className="keen-slider">
            {Marketing.map((data) => (
              <div className={`keen-slider__slide ${Style.itemSlide}`} key={data.id}>
                <div className={Style.card} >
                  <i>
                    <img src={`/images/${data.icon}.svg`} alt="" />
                  </i>
                  <h3>{data.title}</h3>
                  <hr />
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
      <section className={Style.mercado}>
        <div className={Style.grid}>
          <section ref={ref} className="keen-slider">
            {Dados.map((data) => (
              <div className={`keen-slider__slide ${Style.itemSlide}`} key={data.id}>
                <div className={Style.card} >
                  <i>
                    <img src={`/images/${data.icon}.svg`} alt="" />
                  </i>
                  <h3>{data.title}</h3>
                  <hr />
                  <p>{data.description}</p>
                </div>
              </div>

            ))}
          </section>
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
