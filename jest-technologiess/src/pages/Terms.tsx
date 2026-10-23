import LegalPage from '../components/LegalPage';

const sections = [
  { heading: 'Using Jest Technologies', body: ['By creating an account you agree to use the service lawfully and in line with these terms and the policies of any connected platform.', 'You are responsible for the content your agents publish under the rules and approvals you configure.'] },
  { heading: 'Accounts and access', body: ['Keep your credentials secure and limit access to authorized people.', 'We may suspend access that threatens the security or stability of the service.'] },
  { heading: 'Your data', body: ['You own your data. You grant us the limited rights needed to operate the service for you.'] },
  { heading: 'Availability and changes', body: ['We work to keep Jest Technologies available and will give notice of material changes to these terms.', 'The service is provided as described in your order form and our documentation.'] },
];

export default function Terms() {
  return <LegalPage title="Terms of service." intro="The agreement between you and Jest Technologies." updated="October 16, 2026" sections={sections} />;
}
