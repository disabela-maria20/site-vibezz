import { Projetos } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projetos Estratégicos',
  description: 'Conheça os projetos que conectam dados, performance e criatividade.',
  keywords: ['Projetos', 'Cases', 'Dados', 'Performance', 'Criatividade'],
};

function Page() {
  return (
    <>
      <Projetos />
    </>
  )
}
export default Page
