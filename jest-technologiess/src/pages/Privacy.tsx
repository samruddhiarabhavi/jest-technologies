import LegalPage from '../components/LegalPage';

const sections = [
  { heading: 'What we collect', body: ['We collect account details you give us, such as name, work email, and company, and the usage data needed to operate the service.', 'Data from your connected marketing tools is processed on your behalf, inside your isolated environment.'] },
  { heading: 'How we use it', body: ['We use your information to provide and secure Jest Technologies, to support you, and to improve the product.', 'We do not sell personal data, and we do not use your customer or campaign data to train shared models.'] },
  { heading: 'Your choices', body: ['You can access, correct, export, or delete your data at any time by contacting us.', 'Workspace admins control which tools are connected and can revoke access instantly.'] },
  { heading: 'Retention and security', body: ['We keep data only as long as needed to provide the service or meet legal obligations.', 'Data is encrypted in transit and at rest, and access is limited by role.'] },
];

export default function Privacy() {
  return <LegalPage title="Privacy policy." intro="How Jest Technologies collects, uses, and protects information." updated="October 16, 2026" sections={sections} />;
}
