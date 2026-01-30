import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PageWrapper from "../components/layout/PageWrapper";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = {
    "nexus-store": {
      title: "Nexus Store",
      category: "E-commerce",
      description:
        "A headless e-commerce storefront built with Hydrogen and React. It delivers a fast, scalable shopping experience with a customizable front end and seamless integration with backend systems, optimized for performance and conversion across all devices.",
      stack: ["Hydrogen", "React", "Shopify API", "GraphQL", "Tailwind CSS"],
      challenges: [
        "Migrating a legacy monolith to a scalable headless architecture without downtime.",
        "Achieving sub-second page loads for improved SEO and conversion rates.",
        "Synchronizing inventory in real time across multiple sales channels.",
      ],
      solution:
        "Implemented Hydrogen server components for fast rendering and used GraphQL for efficient data fetching. Built a custom caching layer to handle traffic spikes during sales events. All project details are fictional for template demonstration.",
      image: "🛒",
    },
    flowpay: {
      title: "FlowPay",
      category: "Fintech",
      description:
        "A checkout and payment platform built with React and Node.js. It offers a seamless, responsive experience with secure payment integrations and efficient order processing for high-volume merchants.",
      stack: ["React", "Node.js", "Stripe", "PostgreSQL"],
      challenges: [
        "Meeting security compliance for handling payment information (PCI-DSS).",
        "Providing a frictionless checkout experience that reduces abandonment.",
        "Handling concurrent transactions without data inconsistency.",
      ],
      solution:
        "Integrated Stripe Elements for secure payment handling. Used a dedicated API layer for authentication and idempotency. Implemented database transactions and retry logic to ensure data integrity. Sample project for portfolio template.",
      image: "💳",
    },
    eduhub: {
      title: "EduHub",
      category: "Education",
      description:
        "An interactive learning platform built with React and Django. It offers course management, progress tracking, and reliable video delivery, designed for scalable education use cases worldwide.",
      stack: ["React", "Django", "PostgreSQL", "REST API"],
      challenges: [
        "Delivering video content smoothly to a global audience with varying bandwidth.",
        "Creating an intuitive interface for users with different technical backgrounds.",
        "Managing user memberships and content access tiers at scale.",
      ],
      solution:
        "Used a CDN for video delivery and adaptive bitrate streaming. Designed a clear, accessible UI with step-by-step navigation. Implemented a tiered permission system in Django for access control. Fictional case study for template use.",
      image: "📚",
    },
    taskflow: {
      title: "TaskFlow",
      category: "Productivity",
      description:
        "A real-time task and project management application built with React and Node.js. It supports collaborative editing, instant updates via WebSockets, and clear visibility for team workflows.",
      stack: ["React", "Node.js", "WebSockets", "MongoDB"],
      challenges: [
        "Keeping all clients in sync in real time without overwhelming the server.",
        "Scaling WebSocket connections for thousands of concurrent users.",
        "Providing offline support and conflict resolution for collaborative edits.",
      ],
      solution:
        "Implemented a pub/sub layer for real-time events and used optimistic UI updates. Scaled WebSocket connections with Redis for horizontal scaling. Added conflict resolution and sync on reconnect. Demo project for portfolio template.",
      image: "📋",
    },
    "dataviz-dashboard": {
      title: "DataViz Dashboard",
      category: "Analytics",
      description:
        "An analytics dashboard for large datasets, built with React and TypeScript. It provides real-time charts, filters, and drill-downs, optimized for performance with virtualization and efficient data pipelines.",
      stack: ["React", "TypeScript", "D3.js", "GraphQL"],
      challenges: [
        "Rendering large datasets without freezing the UI or excessive memory use.",
        "Providing flexible filtering and aggregation without backend round-trips for every change.",
        "Keeping chart interactions smooth on lower-end devices.",
      ],
      solution:
        "Used virtualized lists and windowing for large tables. Implemented client-side aggregation with Web Workers where needed. Optimized D3.js charts with canvas for heavy series and debounced interactions. Sample project for template.",
      image: "📈",
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <PageWrapper>
        <div className="container px-4 mx-auto text-center py-20">
          <h1 className="text-3xl font-bold mb-4 text-light-textPrimary dark:text-dark-textPrimary">Project Not Found</h1>
          <Button to="/projects" variant="primary">
            Back to Projects
          </Button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="h-64 md:h-96 bg-light-surface dark:bg-dark-surface border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-2xl flex items-center justify-center text-9xl shadow-glow mb-8">
              {project.image}
            </div>
            <div className="flex gap-4">
              <Button to="#" variant="primary" className="flex-1">
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </Button>
              <Button to="#" variant="outline" className="flex-1">
                <FaGithub className="mr-2" /> Source Code
              </Button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="primary">{project.category}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-light-textPrimary dark:text-dark-textPrimary mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="neutral">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="p-8 bg-light-surface/50 dark:bg-dark-surface/50 border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-4">
              The Challenge
            </h3>
            <ul className="list-disc list-inside space-y-2 text-light-textSecondary dark:text-dark-textSecondary">
              {project.challenges.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-light-surface/50 dark:bg-dark-surface/50 border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-4">The Solution</h3>
            <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProjectDetails;
