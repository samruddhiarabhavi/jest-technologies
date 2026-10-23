import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Problem from '../sections/Problem';
import Agents from '../sections/Agents';
import AgentDemo from '../sections/AgentDemo';
import Testimonials from '../sections/Testimonials';
import FinalCTA from '../sections/FinalCTA';

export default function Solutions() {
  return (
    <PageTransition>
      <PageHeader title="Solutions for teams that live in campaigns.">Replace manual reporting and channel juggling with agents that do the work and explain every step.</PageHeader>
      <Problem />
      <Agents />
      <AgentDemo />
      <Testimonials />
      <FinalCTA />
    </PageTransition>
  );
}
