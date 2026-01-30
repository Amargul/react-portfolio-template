import PageWrapper from "../components/layout/PageWrapper";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const Services = () => {
  // Dummy services for template demo — replace with your own
  const services = [
    {
      title: "Headless E-commerce Solutions",
      description:
        "Building scalable, lightning-fast storefronts using Hydrogen, Remix, and Shopify's Headless API for a completely custom shopping experience.",
      icon: "🛍️",
    },
    {
      title: "React Application Development",
      description:
        "Robust Single Page Applications (SPAs) and complex web platforms built with modern React patterns, Redux, and TypeScript.",
      icon: "💻",
    },
    {
      title: "Performance Optimization",
      description:
        "Auditing and enhancing web performance to boost Core Web Vitals, reduce load times, and improve SEO rankings.",
      icon: "🚀",
    },
    {
      title: "UI/UX Engineering",
      description:
        "Translating designs into pixel-perfect, accessible, and responsive user interfaces using Tailwind CSS and Framer Motion.",
      icon: "🎨",
    },
  ];

  return (
    <PageWrapper>
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary">
            Services
          </h1>
          <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary mb-2">
            Specialized in high-performance architecture and headless commerce.
          </p>
          <p className="text-sm text-light-textSecondary/80 dark:text-dark-textSecondary/80">
            Sample services for template demo — replace with your own offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              hoverEffect
              className="p-8 bg-light-surface dark:bg-dark-surface border-light-borderLight/20 dark:border-dark-borderLight/20 flex flex-col"
            >
              <div className="text-5xl mb-6 filter drop-shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-light-textPrimary dark:text-dark-textPrimary">
                {service.title}
              </h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <Button
                to="/contact"
                variant="ghost"
                className="px-0 self-start group text-light-primary dark:text-dark-primary hover:text-light-textPrimary dark:hover:text-dark-textPrimary"
              >
                Start a conversation{" "}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Services;
