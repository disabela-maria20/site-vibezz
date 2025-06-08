import { Sobre } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Quem Somos',
  description: 'Desde 2019, a Vibezz conecta dados e marketing com propósito e performance.',
  keywords: ['Sobre', 'Quem somos', 'Vibezz', 'Propósito', 'Full Service'],
};

function Pagesobre() {
  return <Sobre />
}
export default Pagesobre
