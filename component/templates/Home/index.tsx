"use client"

import { Footer, SlideClientes } from '@/component/molecules';
import Hero from '@/component/molecules/Hero';
import { Header, HomeProcess, HomeSectionCard } from '@/component/organisms';
import transition from '@/utilities/transition'

function Home() {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <main>
        <HomeProcess />
        <HomeSectionCard />
        <SlideClientes />
      </main>
      <Footer />
    </>
  );
}
export default transition(Home);