import { Contato } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Fale Conosco',
  description: 'Entre em contato com a Vibezz e descubra como podemos ajudar sua empresa a crescer com marketing estratégico e dados.',
  keywords: ['Contato', 'Fale conosco', 'Marketing', 'Estratégia', 'Vibezz'],
};

export default function Page() {
  return <Contato />
}
