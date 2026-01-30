import { motion } from "framer-motion";
import Card from "./Card";
import Badge from "./Badge";

const SkillBar = ({ skill, level, category, delay = 0 }) => {
  const categoryColors = {
    Frontend: "primary",
    Backend: "secondary",
    Tools: "accent",
  };

  const color = categoryColors[category] || "primary";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.4 }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">{skill}</span>
        <span className="text-sm font-bold text-light-primary dark:text-dark-primary">{level}%</span>
      </div>
      <div className="h-2 bg-light-borderLight/20 dark:bg-dark-borderLight/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color === "primary"
            ? "from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent"
            : color === "secondary"
              ? "from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-primary"
              : "from-light-accent to-light-secondary dark:from-dark-accent dark:to-dark-secondary"
            }`}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skills = {
    Frontend: [
      { skill: "React & React Hooks", level: 95 },
      { skill: "TypeScript", level: 90 },
      { skill: "Tailwind CSS", level: 92 },
      { skill: "Next.js & Remix", level: 88 },
      { skill: "Framer Motion", level: 85 },
      { skill: "UI/UX Implementation", level: 90 },
    ],
    Backend: [
      { skill: "Node.js & Express", level: 85 },
      { skill: "Django & Python", level: 80 },
      { skill: "Database Design (SQL)", level: 82 },
      { skill: "REST APIs", level: 88 },
      { skill: "GraphQL", level: 75 },
    ],
    Tools: [
      { skill: "Git & Version Control", level: 98 },
      { skill: "Docker", level: 85 },
      { skill: "CI/CD Pipelines", level: 80 },
      { skill: "Performance Optimization", level: 92 },
      { skill: "Testing (Jest, React Testing)", level: 85 },
    ],
  };

  const certifications = [
    {
      title: "React Performance Master",
      issuer: "FreeCodeCamp",
      year: "2024",
    },
    {
      title: "Advanced TypeScript",
      issuer: "Udemy",
      year: "2023",
    },
    {
      title: "Headless Commerce Expert",
      issuer: "Shopify Academy",
      year: "2023",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full blur-3xl opacity-30"></div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-textPrimary dark:text-dark-textPrimary">
            Technical Expertise
          </h2>
          <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
            Deep proficiency across modern web technologies with proven mastery
            in React, performance optimization, and headless commerce.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {Object.entries(skills).map(([category, categorySkills], idx) => (
            <Card
              key={category}
              className="bg-light-surface/50 dark:bg-dark-surface/50 border-light-borderLight/20 dark:border-dark-borderLight/20 p-8 hover:border-light-primary/30 dark:hover:border-dark-primary/30 transition-all"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-8 flex items-center gap-2">
                  {category === "Frontend" && "⚛️"}
                  {category === "Backend" && "🔧"}
                  {category === "Tools" && "🛠️"}
                  {category}
                </h3>

                {categorySkills.map((item, skillIdx) => (
                  <SkillBar
                    key={item.skill}
                    {...item}
                    category={category}
                    delay={idx * 0.15 + skillIdx * 0.08}
                  />
                ))}
              </motion.div>
            </Card>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-8">
            Certifications & Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-light-primary/20 dark:from-dark-primary/20 to-light-secondary/20 dark:to-dark-secondary/20 border-light-primary/30 dark:border-dark-primary/30 p-6 hover:border-light-primary/60 dark:hover:border-dark-primary/60 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🏆</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-light-textPrimary dark:text-dark-textPrimary mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-2">
                        {cert.issuer}
                      </p>
                      <Badge variant="primary" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            { label: "Technologies", value: "20+" },
            { label: "Open Source", value: "5+" },
            { label: "Code Review", value: "500+" },
            { label: "Performance", value: "98 Avg" },
          ].map((stat, idx) => (
            <Card
              key={stat.label}
              className="bg-light-surface/50 dark:bg-dark-surface/50 border-light-borderLight/20 dark:border-dark-borderLight/20 p-6 text-center hover:border-light-primary/50 dark:hover:border-dark-primary/50 transition-all"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08 + 0.3, duration: 0.4 }}
              >
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-light-textSecondary dark:text-dark-textSecondary">{stat.label}</div>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
