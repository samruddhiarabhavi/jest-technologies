import PageTransition from '../components/PageTransition';
import Hero from '../sections/Hero';
import SocialProof from '../sections/SocialProof';
import StatsBand from '../sections/StatsBand';
import ServicesPreview from '../sections/ServicesPreview';
import FeaturedProjects from '../sections/FeaturedProjects';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import FinalCTA from '../sections/FinalCTA';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <SocialProof />
      <StatsBand />
      <ServicesPreview />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <FinalCTA />
    </PageTransition>
  );
}
