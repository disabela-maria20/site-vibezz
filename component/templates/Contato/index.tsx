"use client"

import { HubspotForm } from '@/component/atoms';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition'

function Contato() {
  return (
    <>
      <Header />
      <HubspotForm />
    </>
  );
}
export default transition(Contato);