import { Dados } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Times de Dados',
  description: 'Conheça o time de Dados da Vibezz — especialistas que impulsionam estratégias de marketing com inteligência, performance e insights reais.',
  keywords: [
    'Vibezz',
    'time de dados',
    'marketing baseado em dados',
    'inteligência de marketing',
    'data-driven marketing',
    'analytics',
    'engenharia de dados',
    'estratégia de performance',
    'dados e criatividade'
  ],
};

function PageMarketing() {
  return <Dados />
}
export default PageMarketing
