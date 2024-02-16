import '@/utilities/styles/sass/globals.scss'
import { Header, HomeSectionCard } from "./component/organisms";
import Hero from "./component/molecules/Hero";
import { SlideClientes } from "./component/molecules";
export default function Home() {
  return (
     <>
      <Header>
        <Hero />
      </Header>
      <SlideClientes />
      <HomeSectionCard />
     </>
  );
}
