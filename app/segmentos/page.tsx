import { Segmentos } from "@/component/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Segmentos | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};

function PageSeg() {
  return <Segmentos/>
}
export default PageSeg
