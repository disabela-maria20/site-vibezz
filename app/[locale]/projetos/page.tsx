import { Projetos } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projetos | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};

function Page() {
  return (
    <>
      <Projetos />
    </>
  )
}
export default Page
