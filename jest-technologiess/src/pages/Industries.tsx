import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import IndustriesSection from '../sections/Industries';
import Security from '../sections/Security';
import FinalCTA from '../sections/FinalCTA';

export default function IndustriesPage() {
  return (
    <PageTransition>
      <PageHeader title="Every brand is different. Jest Technologies fits each.">Configure agents and campaigns for the way your market actually works.</PageHeader>
      <IndustriesSection />
      <Security />
      <FinalCTA />
    </PageTransition>
  );
}
