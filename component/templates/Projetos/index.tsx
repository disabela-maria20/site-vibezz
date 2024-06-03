"use client"

import { Title } from '@/component/atoms';
import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition'

function Projetos() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <Title>Projetos</Title>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default transition(Projetos);