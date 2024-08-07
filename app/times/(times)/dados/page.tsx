import { Dados } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Times de Dados | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};
 
function PageMarketing() {
  return <Dados/>
}
export default PageMarketing
