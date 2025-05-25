import { Sobre } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sobre | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};

function Pagesobre() {
  return <Sobre/>
}
export default Pagesobre
