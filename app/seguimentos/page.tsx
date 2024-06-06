import { Seguimentos } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Seguimentos | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};

function PageSeg() {
  return <Seguimentos/>
}
export default PageSeg
