import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaFire,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiRemix,
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
} from "react-icons/si";
import Card from "./Card";
import Badge from "./Badge";

const techIconMap = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  Remix: SiRemix,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  "Node.js": FaNodeJs,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,
  Hydrogen: () => "H₂",
  Headless: () => "⚡",
  Shopify: () => "S",
  Laravel: () => "L",
  PHP: () => "P",
  Python: () => "🐍",
  "Chart.js": () => "📊",
  Redux: () => "R",
  Stripe: () => "$",
};

const FeaturedProjectCard = ({
  rank,
  title,
  description,
  image,
  metrics,
  stack,
  learning,
  category,
  caseStudyUrl,
  liveUrl,
  delay = 0,
  isFeatured = false,
}) => {
  const getTechIcon = (tech) => {
    const IconComponent = techIconMap[tech];
    return IconComponent;
  };

  const categoryColors = {
    "E-commerce": "from-orange-500/20 to-amber-500/20",
    Education: "from-blue-500/20 to-purple-500/20",
    Fintech: "from-green-500/20 to-cyan-500/20",
    LMS: "from-indigo-500/20 to-purple-500/20",
  };

  const accentBars = {
    "E-commerce": "bg-gradient-to-r from-orange-500 to-amber-500",
    Education: "bg-gradient-to-r from-blue-500 to-purple-500",
    Fintech: "bg-gradient-to-r from-green-500 to-cyan-500",
    LMS: "bg-gradient-to-r from-indigo-500 to-purple-500",
  };

  const bgColor = categoryColors[category] || categoryColors["E-commerce"];
  const accentBar = accentBars[category] || accentBars["E-commerce"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.4 }}
      className={`group h-full ${isFeatured ? "md:col-span-2 lg:col-span-2" : ""}`}
    >
      <Card
        className={`flex flex-col h-full bg-gradient-to-br ${bgColor} border-light-borderLight/20 dark:border-dark-borderLight/20 overflow-hidden relative`}
      >
        {/* Accent Bar Top */}
        <div className={`h-1 w-full ${accentBar}`}></div>

        {/* Top Badges Row */}
        <div className="flex items-center justify-between p-6 pb-0">
          <div className="flex gap-2">
            <Badge variant="primary" className="text-xs">
              {category}
            </Badge>
            {isFeatured && (
              <Badge className="bg-light-accent/20 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent border-light-accent/50 dark:border-dark-accent/50 text-xs flex items-center gap-1">
                <FaFire size={10} /> Featured
              </Badge>
            )}
          </div>
          {rank && (
            <div className="text-2xl font-bold bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary bg-clip-text text-transparent">
              #{rank}
            </div>
          )}
        </div>

        {/* Project Image Area with Overlay */}
        <div className="relative h-64 mx-6 mt-4 mb-6 rounded-xl overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${bgColor}`}></div>
          <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
            {image}
          </div>
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 dark:group-hover:bg-black/50 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
            <div className="text-light-textPrimary dark:text-dark-textPrimary text-sm">
              ✨ Hover to explore details
            </div>
          </div>
        </div>

        {/* Project Title with Rank Icon */}
        <div className="px-6 mb-2">
          <h3 className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors mb-2">
            {title}
          </h3>
          <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">{description}</p>
        </div>

        {/* Metrics Grid - Enhanced Display */}
        {metrics && (
          <div className="px-6 my-6 grid grid-cols-2 gap-3">
            {Object.entries(metrics).map(([key, value]) => (
              <div
                key={key}
                className="bg-light-surface/20 dark:bg-dark-surface/20 border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-lg p-3 hover:bg-light-surface/30 dark:hover:bg-dark-surface/30 hover:border-light-primary/30 dark:hover:border-dark-primary/30 transition-all duration-300 cursor-pointer group/metric"
              >
                <div className="text-lg font-bold text-light-primary dark:text-dark-primary group-hover/metric:text-light-accent dark:group-hover/metric:text-dark-accent transition-colors">
                  {value}
                </div>
                <div className="text-xs text-light-textSecondary dark:text-dark-textSecondary capitalize font-medium">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack with Icons */}
        <div className="px-6 mb-6">
          <p className="text-xs font-bold text-light-textSecondary dark:text-dark-textSecondary uppercase tracking-wider mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => {
              const IconComponent = getTechIcon(tech);
              return (
                <div
                  key={tech}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-light-surface/20 dark:bg-dark-surface/20 border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-lg hover:bg-light-surface/30 dark:hover:bg-dark-surface/30 hover:border-light-primary/50 dark:hover:border-dark-primary/50 transition-all duration-200 group/tech"
                  title={tech}
                >
                  {IconComponent ? (
                    typeof IconComponent === "function" ? (
                      <span className="text-sm">
                        {IconComponent?.render
                          ? IconComponent()
                          : IconComponent()}
                      </span>
                    ) : (
                      <IconComponent size={14} className="text-light-primary dark:text-dark-primary" />
                    )
                  ) : (
                    <span className="text-sm text-light-primary dark:text-dark-primary font-medium">•</span>
                  )}
                  <span className="text-xs font-medium text-light-textSecondary dark:text-dark-textSecondary group-hover/tech:text-light-textPrimary dark:group-hover/tech:text-dark-textPrimary">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning/Insight Section */}
        {learning && (
          <div className="px-6 mb-6 bg-light-primary/10 dark:bg-dark-primary/10 border border-light-primary/20 dark:border-dark-primary/20 rounded-lg p-4">
            <div className="flex gap-2 items-start">
              <FaStar size={14} className="text-light-primary dark:text-dark-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-light-primary dark:text-dark-primary uppercase mb-1">
                  Key Learning
                </p>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">{learning}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Buttons - Dual Actions */}
        <div className={`px-6 mt-auto pt-6 flex ${isFeatured ? "flex-row" : "flex-col"} gap-3`}>
          <motion.a
            href={caseStudyUrl}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-4 py-3 bg-light-primary dark:bg-dark-primary text-white rounded-lg font-semibold text-sm hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-light-primary/20 dark:shadow-dark-primary/20"
          >
            📖 Case Study
            <FaArrowRight size={12} />
          </motion.a>
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-4 py-3 bg-light-secondary/20 dark:bg-dark-secondary/20 text-light-secondary dark:text-dark-secondary border border-light-secondary/50 dark:border-dark-secondary/50 rounded-lg font-semibold text-sm hover:bg-light-secondary/30 dark:hover:bg-dark-secondary/30 hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </motion.a>
        </div>

        {/* Bottom Border Accent */}
        <div className={`h-1 w-full ${accentBar} mt-6`}></div>
      </Card>
    </motion.div>
  );
};

export default FeaturedProjectCard;
