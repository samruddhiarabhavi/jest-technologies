import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <PageTransition>
      <PageHeader title="Page not found.">The page you are looking for does not exist or has moved.</PageHeader>
      <div className="wrap mb-32 mt-10">
        <Button to="/">Back to home</Button>
      </div>
    </PageTransition>
  );
}
