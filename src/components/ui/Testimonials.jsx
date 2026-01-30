import { motion } from "framer-motion";
import Card from "./Card";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ text, author, role, rating = 5, delay = 0 }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.4 },
    },
  };

  return (
    <motion.div variants={variants}>
      <Card className="h-full flex flex-col bg-light-surface/50 dark:bg-dark-surface/50 border-light-primary/20 dark:border-dark-primary/20 hover:border-light-primary/60 dark:hover:border-dark-primary/60">
        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-light-accent dark:text-dark-accent text-sm" />
          ))}
        </div>

        {/* Quote Mark */}
        <div className="text-4xl text-light-primary/30 dark:text-dark-primary/30 mb-2 leading-none">"</div>

        {/* Testimonial Text */}
        <p className="text-light-textSecondary dark:text-dark-textSecondary mb-6 flex-grow leading-relaxed italic">
          {text}
        </p>

        {/* Author Info */}
        <div className="border-t border-light-borderLight/20 dark:border-dark-borderLight/20 pt-4">
          <p className="font-semibold text-light-textPrimary dark:text-dark-textPrimary">{author}</p>
          <p className="text-sm text-light-primary dark:text-dark-primary">{role}</p>
        </div>
      </Card>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "Exceptional React applications that exceeded our performance targets. Attention to detail and proactive communication made the entire process seamless.",
      author: "Sample Client",
      role: "Demo – Acme Corp",
      rating: 5,
    },
    {
      text: "Working on our e-commerce platform was a game-changer. The 20% traffic increase we saw within 3 months paid for the project multiple times over.",
      author: "Sample Client",
      role: "Demo – Tech Solutions Inc",
      rating: 5,
    },
    {
      text: "Expertise in headless commerce and performance optimization transformed our store. A rare combination of technical skill and business acumen.",
      author: "Sample Client",
      role: "Demo – Fictional Company",
      rating: 5,
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
    <section className="py-20 bg-light-surface/30 dark:bg-dark-surface/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full blur-3xl opacity-30"></div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-light-textPrimary dark:text-dark-textPrimary"
          >
            What Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-xl text-light-textSecondary dark:text-dark-textSecondary"
          >
            Sample testimonials for demo purposes. Replace with real client feedback when using this template.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
