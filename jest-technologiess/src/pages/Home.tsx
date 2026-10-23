import PageTransition from '../components/PageTransition';
import Hero from '../sections/Hero';
import SocialProof from '../sections/SocialProof';
import Problem from '../sections/Problem';
import Agents from '../sections/Agents';
import AgentDemo from '../sections/AgentDemo';
import Workflow from '../sections/Workflow';
import Platform from '../sections/Platform';
import Industries from '../sections/Industries';
import Integrations from '../sections/Integrations';
import Security from '../sections/Security';
import Testimonials from '../sections/Testimonials';
import FinalCTA from '../sections/FinalCTA';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <SocialProof />
      <Problem />
      <Agents />
      <AgentDemo />
      <Workflow />
      <Platform />
      <Industries />
      <Integrations />
      <Security />
      <Testimonials />
      <FinalCTA />
    </PageTransition>
  );
}
