import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiRemix,
  SiReactquery,
  SiPostgresql,
  SiStorybook,
  SiJest,
  SiVite,
} from "react-icons/si";
import {
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaSearch,
  FaPaintBrush,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import PageWrapper from "../components/layout/PageWrapper";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Stats from "../components/ui/Stats";
import Testimonials from "../components/ui/Testimonials";
import FeaturedProjectCard from "../components/ui/FeaturedProjectCard";
import SkillsSection from "../components/ui/SkillsSection";
import WorkWithMeCTA from "../components/ui/WorkWithMeCTA";
import { siteConfig } from "../config/site.config";

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-light-secondary/20 dark:bg-dark-secondary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-hero-glow blur-[100px] rounded-full"></div>
        </div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="primary" className="mb-6 shadow-glow">
                Available for Hire
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-light-textPrimary dark:text-dark-textPrimary"
            >
              Hi, I'm {siteConfig.personal?.name ?? ''} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-primary via-light-accent to-light-secondary dark:from-dark-primary dark:via-dark-accent dark:to-dark-secondary">
                {siteConfig.personal?.role}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-light-textSecondary dark:text-dark-textSecondary mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {siteConfig.personal?.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                to="/projects"
                variant="primary"
                className="h-12 px-8 text-lg"
              >
                View Projects
              </Button>
              <Button
                to="/contact"
                variant="outline"
                className="h-12 px-8 text-lg"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <Stats />

      {/* Tech Stack Marquee */}
      <section className="py-20 bg-light-surface/30 dark:bg-dark-surface/30 border-y border-light-borderLight/20 dark:border-dark-borderLight/20 overflow-hidden">
        <div className="container px-4 mx-auto mb-10">
          <h2 className="text-3xl font-bold text-center text-light-textPrimary dark:text-dark-textPrimary">
            Core Technologies & Tools
          </h2>
          <p className="text-center text-light-textSecondary dark:text-dark-textSecondary mt-2">
            The modern stack I use to build world-class applications.
          </p>
        </div>

        <div className="flex gap-8 overflow-hidden py-4 relative">
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-light-background dark:from-dark-background via-transparent to-light-background dark:to-dark-background"></div>

          <motion.div
            className="flex gap-12 flex-shrink-0 relative z-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ willChange: "transform" }}
          >
            {[...new Array(2)]
              .flatMap(() => [
                { Icon: FaReact, name: "React", color: "text-blue-400 dark:text-blue-200" },
                { Icon: SiNextdotjs, name: "Next.js", color: "text-gray-900 dark:text-white" },
                { Icon: SiRemix, name: "Remix", color: "text-gray-900 dark:text-white" },
                {
                  Icon: SiTypescript,
                  name: "TypeScript",
                  color: "text-blue-500 dark:text-blue-300",
                },
                { Icon: SiRedux, name: "Redux", color: "text-purple-500 dark:text-purple-300" },
                {
                  Icon: SiReactquery,
                  name: "TanStack Query",
                  color: "text-red-500 dark:text-red-300",
                },
                {
                  Icon: SiTailwindcss,
                  name: "Tailwind",
                  color: "text-cyan-400 dark:text-cyan-200",
                },
                { Icon: FaNodeJs, name: "Node.js", color: "text-green-500 dark:text-green-300" },
                { Icon: SiGraphql, name: "GraphQL", color: "text-pink-500 dark:text-pink-300" },
                {
                  Icon: SiPostgresql,
                  name: "PostgreSQL",
                  color: "text-blue-300 dark:text-blue-100",
                },
                { Icon: FaDocker, name: "Docker", color: "text-blue-500 dark:text-blue-300" },
                { Icon: FaFigma, name: "Figma", color: "text-pink-400 dark:text-pink-200" },
                {
                  Icon: SiStorybook,
                  name: "Storybook",
                  color: "text-pink-500 dark:text-pink-300",
                },
                { Icon: SiJest, name: "Jest", color: "text-red-400 dark:text-red-200" },
                { Icon: SiVite, name: "Vite", color: "text-purple-400 dark:text-purple-200" },
                { Icon: FaGitAlt, name: "Git", color: "text-orange-500 dark:text-orange-300" },
              ])
              .map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 group min-w-[100px]"
                >
                  <tech.Icon
                    className={`text-5xl ${tech.color} drop-shadow-lg transition-colors`}
                    style={{ display: 'block', fill: 'currentColor' }}
                  />
                  <span className="text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-textPrimary dark:group-hover:text-dark-textPrimary transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Development Workflow - Premium Redesign */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-light-primary/5 dark:bg-dark-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Badge variant="primary" className="mb-6">
                How I Work
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary">
                Development Workflow
              </h2>
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto leading-relaxed">
                A proven process for delivering high-quality, scalable
                applications from concept to deployment.
              </p>
            </motion.div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-light-primary/50 dark:via-dark-primary/50 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Discovery",
                  desc: "Understanding requirements, user needs, and project goals.",
                  Icon: FaSearch,
                  color: "bg-purple-600",
                },
                {
                  title: "Design",
                  desc: "Creating intuitive UI/UX architectures and design systems.",
                  Icon: FaPaintBrush,
                  color: "bg-pink-600",
                },
                {
                  title: "Develop",
                  desc: "Writing clean, scalable code with modern best practices.",
                  Icon: FaCode,
                  color: "bg-cyan-600",
                },
                {
                  title: "Deploy",
                  desc: "CI/CD pipelines, rigorous testing, and performance tuning.",
                  Icon: FaRocket,
                  color: "bg-green-600",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.4 }}
                >
                  {/* Step Number Watermark */}
                  <div className="absolute -top-12 -right-2 text-[8rem] font-bold text-light-textPrimary/5 dark:text-dark-textPrimary/5 z-0 group-hover:text-light-textPrimary/10 dark:group-hover:text-dark-textPrimary/10 transition-colors duration-500 select-none font-heading leading-none">
                    0{index + 1}
                  </div>

                  {/* Card */}
                  <div className="relative z-10 bg-light-surface/40 dark:bg-dark-surface/40 backdrop-blur-xl border border-light-borderLight/20 dark:border-dark-borderLight/20 p-8 rounded-2xl hover:border-light-primary/50 dark:hover:border-dark-primary/50 hover:-translate-y-3 transition-all duration-300 shadow-card hover:shadow-glow h-full flex flex-col items-center text-center">
                    {/* Icon Box */}
                    <div
                      className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-3xl text-white mb-8 shadow-glow transform group-hover:scale-110 transition-transform duration-300 relative z-20`}
                    >
                      <step.Icon />
                    </div>

                    <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <Testimonials />

      {/* PREMIUM Featured Projects Section */}
      <section className="py-28 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full blur-3xl opacity-20"></div>

        <div className="container px-4 mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Badge variant="primary">Featured Work</Badge>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary">
              Showcase of Excellence
            </h2>
            <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto leading-relaxed">
              A showcase of sample projects demonstrating modern web development
              practices and scalable application architecture.
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Project 1: Nexus Store - FEATURED */}
            <FeaturedProjectCard
              rank={1}
              title="Nexus Store"
              description="Headless e-commerce storefront with fast, scalable shopping experience"
              image="🛒"
              category="E-commerce"
              metrics={{
                conversion: "+18%",
                speed: "98 LH",
                users: "15K+",
                roi: "+150%",
              }}
              stack={["React", "Hydrogen", "Tailwind", "Shopify"]}
              learning="Headless commerce with Hydrogen delivers faster performance and enables strong customization for storefronts"
              caseStudyUrl="/projects/nexus-store"
              liveUrl="#"
              isFeatured={true}
              delay={0}
            />

            {/* Project 2: FlowPay */}
            <FeaturedProjectCard
              rank={2}
              title="FlowPay"
              description="Checkout and payment platform with secure integrations"
              image="💳"
              category="Fintech"
              metrics={{
                conversion: "+15%",
                speed: "95 LH",
                users: "20K+",
                engagement: "+45%",
              }}
              stack={["React", "Node.js", "Stripe", "PostgreSQL"]}
              learning="Stripe integration and optimized checkout flow improved conversion and reduced abandonment"
              caseStudyUrl="/projects/flowpay"
              liveUrl="#"
              delay={0.1}
            />

            {/* Project 3: EduHub */}
            <FeaturedProjectCard
              rank={3}
              title="EduHub"
              description="Interactive learning platform with course and progress tracking"
              image="📚"
              category="Education"
              metrics={{
                engagement: "+40%",
                courses: "50+",
                completion: "85%",
                speed_improvement: "+30%",
              }}
              stack={["React", "Django", "PostgreSQL", "REST"]}
              learning="CDN-backed video delivery and tiered access control enabled scalable global education use cases"
              caseStudyUrl="/projects/eduhub"
              liveUrl="#"
              delay={0.2}
            />
          </div>

          {/* Explore All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <Button
              to="/projects"
              variant="secondary"
              className="shadow-lg shadow-light-secondary/20 dark:shadow-dark-secondary/20 h-12 px-8"
            >
              Explore All 5 Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Work With Me CTA */}
      <WorkWithMeCTA />
    </PageWrapper>
  );
};

export default Home;
