import { Times } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Nosso Time',
  description: 'Conheça o time da Vibezz que transforma dados em resultados com criatividade e estratégia.',
  keywords: ['Time', 'Equipe', 'Profissionais', 'Marketing', 'Dados', 'Vibezz'],
};

function PageTimes() {
  return <Times />
}
export default PageTimes
