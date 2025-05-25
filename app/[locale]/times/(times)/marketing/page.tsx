import { Marketing } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Times de Marketing | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};
 
function PageDados() {
  return <Marketing/>
}
export default PageDados
