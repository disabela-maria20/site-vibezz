import { Segmentos } from "@/component/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Segmentos',
  description: 'Presente no Brasil, México, Colômbia e EUA com soluções em marketing, dados e produtos digitais.',
  keywords: ['Segmentos', 'Internacional', 'Brasil', 'México', 'Colômbia', 'EUA', 'Marketing'],
};


function PageSeg() {
  return <Segmentos />
}
export default PageSeg
