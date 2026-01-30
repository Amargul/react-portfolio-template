import { FaAward, FaTrophy, FaRocket, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const StatsCard = ({ number, label, icon: IconComponent, delay = 0 }) => {
  const countUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={countUp}
      className="bg-gradient-to-br from-light-primary/20 dark:from-dark-primary/20 to-light-secondary/20 dark:to-dark-secondary/20 border border-light-primary/30 dark:border-dark-primary/30 rounded-lg p-6 text-center hover:border-light-primary/60 dark:hover:border-dark-primary/60 hover:shadow-glow transition-all duration-300 group"
    >
      <div className="text-4xl mb-3 text-light-primary dark:text-dark-primary group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="mx-auto" />
      </div>
      <div className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-2">{number}</div>
      <div className="text-sm text-light-textSecondary dark:text-dark-textSecondary font-medium">{label}</div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: FaTrophy,
    },
    {
      number: "20%",
      label: "Avg Traffic Growth",
      icon: FaRocket,
    },
    {
      number: "3+",
      label: "Years Experience",
      icon: FaAward,
    },
    {
      number: "10+",
      label: "E-Commerce Platforms",
      icon: FaUsers,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-light-background dark:from-dark-background to-light-surface/20 dark:to-dark-surface/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full blur-3xl opacity-40"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} delay={index * 0.15} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
