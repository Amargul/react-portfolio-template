import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaBullseye, FaCalendarAlt } from "react-icons/fa";
import Button from "./Button";
import Card from "./Card";
import Badge from "./Badge";
import { siteConfig } from "../../config/site.config";

const WorkWithMeCTA = () => {
  const benefits = [
    {
      icon: FaCheckCircle,
      title: "Proven Track Record",
      description: "50+ successful projects, 20% average growth, 5-star ratings",
    },
    {
      icon: FaClock,
      title: "Quick Turnaround",
      description: "2-3 week delivery for MVPs, agile methodology",
    },
    {
      icon: FaBullseye,
      title: "Performance-Focused",
      description: "98+ Lighthouse, mobile-first, conversion optimized",
    },
    {
      icon: FaCalendarAlt,
      title: "Available Now",
      description: "2-4 projects available, flexible scheduling",
    },
  ];

  // Dummy services & pricing for template demo — replace with your own
  const services = [
    {
      title: "React Applications",
      description: "Custom SPAs with modern patterns and best practices.",
      icon: "⚛️",
      price: "$4K–12K",
    },
    {
      title: "Headless Commerce",
      description: "Hydrogen, Remix, and high-performance e-commerce storefronts.",
      icon: "🛍️",
      price: "$5K–15K",
    },
    {
      title: "Performance Audit",
      description: "Analyze, optimize, and improve Core Web Vitals.",
      icon: "🚀",
      price: "$1K–3K",
    },
    {
      title: "UI/UX Engineering",
      description: "Design implementation, animations, and responsive interfaces.",
      icon: "🎨",
      price: "$2K–8K",
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
    <section className="py-28 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full blur-3xl opacity-30"></div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <Badge variant="primary" className="mb-6">
            Let's Build Something Great
          </Badge>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary">
            Ready for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-primary via-light-accent to-light-secondary dark:from-dark-primary dark:via-dark-accent dark:to-dark-secondary">
              Next Project?
            </span>
          </h2>

          <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Currently accepting projects with a proven track record of
            delivering high-impact, performance-optimized solutions. Let's
            discuss how we can help achieve your goals.
          </p>

          {/* Quick Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto"
          >
            {[
              { number: "2-4", label: "Projects Available" },
              { number: "2-3", label: "Week Turnaround" },
              { number: "98+", label: "Avg Lighthouse" },
              { number: "5★", label: "Client Rating" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.1 },
                  },
                }}
                className="bg-light-surface/50 dark:bg-dark-surface/50 border border-light-primary/20 dark:border-dark-primary/20 rounded-lg p-4 hover:border-light-primary/50 dark:hover:border-dark-primary/50 transition-all"
              >
                <div className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-light-textSecondary dark:text-dark-textSecondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              to="/contact"
              variant="primary"
              className="h-14 px-8 text-lg shadow-lg shadow-primary/30"
            >
              Schedule Consultation
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg">
              Download Project Brief
            </Button>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20"
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.1 },
                  },
                }}
              >
                <Card className="bg-light-surface/50 dark:bg-dark-surface/50 border-light-borderLight/20 dark:border-dark-borderLight/20 p-6 h-full hover:border-light-primary/50 dark:hover:border-dark-primary/50 transition-all group">
                  <div className="flex gap-4">
                    <div className="text-3xl text-light-primary dark:text-dark-primary group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-light-textPrimary dark:text-dark-textPrimary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary text-center mb-2">
            Services & Pricing
          </h3>
          <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary text-center mb-12">
            Sample pricing for template demo — replace with your own rates.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.1 },
                  },
                }}
              >
                <Card className="bg-gradient-to-br from-light-surface/60 dark:from-dark-surface/60 to-light-primary/10 dark:to-dark-primary/10 border-light-primary/20 dark:border-dark-primary/20 p-6 h-full hover:border-light-primary/50 dark:hover:border-dark-primary/50 hover:shadow-glow transition-all flex flex-col">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="font-bold text-light-textPrimary dark:text-dark-textPrimary mb-2">{service.title}</h4>
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-light-borderLight/20 dark:border-dark-borderLight/20">
                    <div className="text-lg font-bold text-light-primary dark:text-dark-primary">
                      {service.price}
                    </div>
                    <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary">Starting at (sample)</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto bg-light-surface/30 dark:bg-dark-surface/30 border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary text-center mb-12">
            How We Work Together
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: "1",
                title: "Discovery Call",
                description: "30-min consultation to understand your vision",
              },
              {
                step: "2",
                title: "Project Scope",
                description: "Detailed brief, timeline, and deliverables",
              },
              {
                step: "3",
                title: "Development",
                description: "Agile delivery with weekly updates",
              },
              {
                step: "4",
                title: "Launch & Support",
                description: "Deploy, test, and 30-day post-launch support",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-light-primary dark:bg-dark-primary text-white font-bold rounded-full mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="font-bold text-light-textPrimary dark:text-dark-textPrimary mb-2">{item.title}</h4>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline visualization */}
          <div className="h-1 bg-gradient-to-r from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent opacity-30 rounded-full mt-8"></div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-light-textSecondary dark:text-dark-textSecondary mb-8 text-lg">
            Don't see what you need? Let's discuss a custom project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" className="h-12 px-8">
              Start a Conversation
            </Button>
            <a
              href={`mailto:${siteConfig.contact?.email}`}
              className="h-12 px-8 bg-light-surface dark:bg-dark-surface border border-light-borderLight/20 dark:border-dark-borderLight/20 text-light-textPrimary dark:text-dark-textPrimary rounded-lg font-semibold hover:border-light-primary/50 dark:hover:border-dark-primary/50 transition-all flex items-center justify-center"
            >
              Email directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithMeCTA;
