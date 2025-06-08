import { Marketing } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Time de Marketing',
  description: 'Conheça o time de Marketing da Vibezz — profissionais que criam campanhas inovadoras e estratégias focadas em resultados e crescimento.',
  keywords: [
    'Vibezz',
    'time de marketing',
    'marketing digital',
    'campanhas criativas',
    'estratégias de marketing',
    'performance marketing',
    'publicidade',
    'growth hacking',
    'branding',
    'gestão de marketing'
  ],
};

function PageDados() {
  return <Marketing />
}
export default PageDados
