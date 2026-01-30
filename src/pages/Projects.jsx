import PageWrapper from "../components/layout/PageWrapper";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: "nexus-store",
      title: "Nexus Store",
      category: "E-commerce",
      description:
        "Headless e-commerce storefront built with Hydrogen and React. Delivers a fast, scalable shopping experience with a custom front end and seamless backend integration.",
      stack: ["Hydrogen", "React", "Tailwind", "Shopify"],
      image: "🛒",
      metrics: { conversion: "+18%", speed: "98 LH", users: "15K+" },
      liveUrl: "#",
      githubUrl: "#",
      status: "LIVE",
    },
    {
      id: "flowpay",
      title: "FlowPay",
      category: "Fintech",
      description:
        "Checkout and payment platform with a seamless user experience. Secure payment integrations and efficient order processing for high-volume merchants.",
      stack: ["React", "Node.js", "Stripe", "PostgreSQL"],
      image: "💳",
      metrics: { conversion: "+15%", speed: "95 LH", users: "20K+" },
      liveUrl: "#",
      githubUrl: "#",
      status: "LIVE",
    },
    {
      id: "eduhub",
      title: "EduHub",
      category: "Education",
      description:
        "Interactive learning platform with course management, progress tracking, and video delivery. Designed for scalable, global education use cases.",
      stack: ["React", "Django", "PostgreSQL", "REST"],
      image: "📚",
      metrics: { engagement: "+40%", courses: "50+", completion: "85%" },
      liveUrl: "#",
      githubUrl: "#",
      status: "LIVE",
    },
    {
      id: "taskflow",
      title: "TaskFlow",
      category: "Productivity",
      description:
        "Real-time task and project management app with collaborative features. Built for teams that need instant updates and clear visibility.",
      stack: ["React", "Node.js", "WebSockets", "MongoDB"],
      image: "📋",
      metrics: { users: "5K+", tasks: "100K+", uptime: "99.9%" },
      liveUrl: "#",
      githubUrl: "#",
      status: "LIVE",
    },
    {
      id: "dataviz-dashboard",
      title: "DataViz Dashboard",
      category: "Analytics",
      description:
        "Analytics dashboard for large datasets with real-time charts and filters. Optimized for performance with virtualization and efficient data pipelines.",
      stack: ["React", "TypeScript", "D3.js", "GraphQL"],
      image: "📈",
      metrics: { views: "10K+", datasets: "100+", load: "< 2s" },
      liveUrl: "#",
      githubUrl: "#",
      status: "LIVE",
    },
  ];

  return (
    <PageWrapper>
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary">
            Projects
          </h1>
          <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">
            A showcase of sample projects demonstrating scalable web applications
            and modern development practices. All projects are fictional for template use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <Card
                hoverEffect
                className="flex flex-col h-full overflow-hidden group bg-light-surface dark:bg-dark-surface border-light-borderLight/20 dark:border-dark-borderLight/20"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 -mx-6 -mt-6 mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500 border-b border-light-borderLight/10 dark:border-dark-borderLight/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-light-background/40 dark:from-dark-background/40 to-transparent"></div>
                  <span className="relative z-10">{project.image}</span>
                  {project.status && (
                    <div className="absolute top-3 right-3 z-20">
                      <Badge variant="primary" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Category & Title */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="primary">{project.category}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-light-textPrimary dark:text-dark-textPrimary">
                  {project.title}
                </h3>
                <p className="text-light-textSecondary dark:text-dark-textSecondary mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Project Metrics */}
                {project.metrics && (
                  <div className="mb-6 grid grid-cols-3 gap-3 p-4 bg-light-primary/10 dark:bg-dark-primary/10 rounded-lg border border-light-primary/20 dark:border-dark-primary/20">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-light-primary dark:text-dark-primary">
                          {value}
                        </div>
                        <div className="text-xs text-light-textSecondary dark:text-dark-textSecondary capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-light-textSecondary dark:text-dark-textSecondary uppercase tracking-wider mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="neutral">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                    to={`/projects/${project.id}`}
                    variant="outline"
                    className="w-full"
                  >
                    View Case Study
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-light-secondary/10 dark:bg-dark-secondary/10 text-light-secondary dark:text-dark-secondary rounded-lg hover:bg-light-secondary/20 dark:hover:bg-dark-secondary/20 transition-colors text-sm font-medium border border-light-secondary/20 dark:border-dark-secondary/20 hover:border-light-secondary/50 dark:hover:border-dark-secondary/50"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-light-surface/20 dark:bg-dark-surface/20 text-light-textSecondary dark:text-dark-textSecondary rounded-lg hover:bg-light-surface/30 dark:hover:bg-dark-surface/30 transition-colors text-sm font-medium border border-light-borderLight/20 dark:border-dark-borderLight/20 hover:border-light-borderLight/50 dark:hover:border-dark-borderLight/50"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
