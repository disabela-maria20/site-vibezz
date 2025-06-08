import { Parceiros } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Clientes e Parceiros',
  description: 'Conheça nossos principais parceiros como APAS, Paramount Pictures, IMAX, Sony Pictures e Diamond Films.',
  keywords: ['Clientes', 'Parceiros', 'APAS', 'Paramount', 'IMAX', 'Sony Pictures', 'Diamond Films'],
};

function Page() {
  return <Parceiros />
}
export default Page
