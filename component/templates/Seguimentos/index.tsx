"use client"

import { Title } from '@/component/atoms';
import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition';

function Seguimentos() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <Title>Seguimentos</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla eleifend, imperdiet arcu sed, sollicitudin tellus. Pellentesque augue mauris, sollicitudin quis ante a, pretium posuere est. </p>
        </div>
      </section>
      
      <Footer/>
    </>
  );
}
export default transition(Seguimentos)