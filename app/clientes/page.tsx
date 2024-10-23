import { Parceiros } from "@/component/templates"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Parceiros | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};

function Page() {
  return <Parceiros />
}
export default Page
