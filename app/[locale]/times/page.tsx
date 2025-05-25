import { Times } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Times | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};
 
function PageTimes() {
  return <Times/>
}
export default PageTimes
