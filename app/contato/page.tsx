import { Contato } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contato | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};


export default function Page() {
  return <Contato/>
}
