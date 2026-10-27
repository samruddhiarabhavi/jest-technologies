import PageTransition from '../components/PageTransition';
import Hero from '../sections/Hero';
import Clients from '../sections/Clients';
import ServicesList from '../sections/ServicesList';
import FeaturedWork from '../sections/FeaturedWork';
import HowWeWork from '../sections/HowWeWork';
import StatsBand from '../sections/StatsBand';
import ClientNotes from '../sections/ClientNotes';
import CtaBand from '../sections/CtaBand';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Clients />
      <ServicesList />
      <FeaturedWork />
      <HowWeWork />
      <StatsBand />
      <ClientNotes />
      <CtaBand />
    </PageTransition>
  );
}
