"use client"
import { Footer, SlideClientes } from '@/component/molecules';
import Hero from '@/component/molecules/Hero';
import { Header, HomeProcess, HomeSectionCard } from '@/component/organisms';
import '@/utilities/styles/sass/globals.scss'


export default function Home() {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <SlideClientes />
      <HomeSectionCard />
      <HomeProcess />
      <Footer />
    </>
  );
}
