import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import PlatformSection from '../sections/Platform';
import Workflow from '../sections/Workflow';
import Integrations from '../sections/Integrations';
import FinalCTA from '../sections/FinalCTA';

export default function PlatformPage() {
  return (
    <PageTransition>
      <PageHeader title="The platform behind autonomous marketing.">Agents, campaigns, automations, analytics, and integrations on one intelligence layer.</PageHeader>
      <PlatformSection />
      <Workflow />
      <Integrations />
      <FinalCTA />
    </PageTransition>
  );
}
