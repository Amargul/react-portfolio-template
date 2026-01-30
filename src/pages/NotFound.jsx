import PageWrapper from "../components/layout/PageWrapper";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <PageWrapper>
      <div className="container px-4 mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-9xl font-bold text-primary opacity-20 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-textSecondary mb-10 max-w-lg">
          Oops! The page you’re looking for doesn’t exist. It might have been
          moved or deleted.
        </p>
        <div className="flex gap-4">
          <Button to="/" variant="primary">
            Go Home
          </Button>
          <Button to="/projects" variant="outline">
            View Projects
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
