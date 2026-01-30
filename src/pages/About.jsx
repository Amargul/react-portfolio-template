import { motion } from "framer-motion";
import PageWrapper from "../components/layout/PageWrapper";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import { siteConfig } from "../config/site.config";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <PageWrapper>
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary">
            About
          </h1>
          <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
            {siteConfig.personal?.description} Based in {siteConfig.contact?.location}, specializing in optimizing performance,
            enhancing user experiences, and maintainable coding practices.
          </p>
        </motion.div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-light-textPrimary dark:text-dark-textPrimary">
            Work Experience
          </h2>
          <div className="space-y-8 max-w-3xl">
            {/* Experience 1 */}
            <div className="border-l-2 border-light-primary dark:border-dark-primary pl-8 relative">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-light-primary dark:bg-dark-primary rounded-full shadow-glow"></div>
              <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">
                Senior Frontend Engineer
              </h3>
              <p className="text-light-primary dark:text-dark-primary font-medium">
                Acme Corp | {siteConfig.contact?.location}
              </p>
              <span className="text-sm text-light-textSecondary dark:text-dark-textSecondary block mb-4">
                2022 – Present
              </span>
              <ul className="list-disc list-inside text-light-textSecondary dark:text-dark-textSecondary space-y-2">
                <li>
                  Developed modern React-based applications,
                  enhancing user experience.
                </li>
                <li>
                  Optimized websites for accessibility and speed, increasing
                  site performance.
                </li>
                <li>
                  Collaborated with teams and utilized Git for seamless
                  version control.
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="border-l-2 border-light-borderLight/20 dark:border-dark-borderLight/20 pl-8 relative">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-light-surface dark:bg-dark-surface border border-light-borderLight/50 dark:border-dark-borderLight/50 rounded-full"></div>
              <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Frontend Developer</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary font-medium">
                Tech Solutions Inc | {siteConfig.contact?.location}
              </p>
              <span className="text-sm text-light-textSecondary dark:text-dark-textSecondary block mb-4">
                2020 – 2022
              </span>
              <ul className="list-disc list-inside text-light-textSecondary dark:text-dark-textSecondary space-y-2">
                <li>
                  Worked on frontend technologies using JavaScript and
                  TypeScript.
                </li>
                <li>
                  Assisted in troubleshooting and maintaining a portfolio of
                  websites.
                </li>
                <li>
                  Gained hands-on experience with modern frameworks and responsive
                  design.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-light-textPrimary dark:text-dark-textPrimary">
            Coding Activity
          </h2>
          <div className="bg-light-surface dark:bg-dark-surface border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-xl p-8 overflow-hidden relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-2">1,200+</h3>
                <p className="text-light-textSecondary dark:text-dark-textSecondary mb-6">
                  Commits in the last year
                </p>
                <div className="flex gap-2">
                  {[...Array(52)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-8 rounded-full ${Math.random() > 0.5 ? "bg-light-primary dark:bg-dark-primary" : "bg-light-borderLight/20 dark:bg-dark-borderLight/20"}`}
                      style={{ opacity: Math.random() * 0.8 + 0.2 }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 text-center md:text-left">
                <div>
                  <div className="text-3xl font-bold text-light-secondary dark:text-dark-secondary mb-1">
                    10+
                  </div>
                  <div className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                    Live Projects
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-light-accent dark:text-dark-accent mb-1">
                    3+ Years
                  </div>
                  <div className="text-sm text-light-textSecondary dark:text-dark-textSecondary">Experience</div>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full blur-2xl"></div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-light-textPrimary dark:text-dark-textPrimary">Education</h2>
          <Card className="bg-light-surface dark:bg-dark-surface border-light-borderLight/20 dark:border-dark-borderLight/20 p-6">
            <h3 className="text-xl font-bold text-light-textPrimary dark:text-dark-textPrimary">
              B.S. Computer Science
            </h3>
            <p className="text-light-primary dark:text-dark-primary">State University</p>
            <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm">2016 – 2020</p>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-light-textPrimary dark:text-dark-textPrimary">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-light-surface dark:bg-dark-surface border-light-borderLight/20 dark:border-dark-borderLight/20">
              <h3 className="font-bold mb-4 text-light-primary dark:text-dark-primary">Core & Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral">ReactJS</Badge>
                <Badge variant="neutral">JavaScript (ES6+)</Badge>
                <Badge variant="neutral">TypeScript</Badge>
                <Badge variant="neutral">HTML5 & CSS3</Badge>
                <Badge variant="neutral">Remix</Badge>
              </div>
            </Card>
            <Card className="p-6 bg-light-surface dark:bg-dark-surface border-light-borderLight/20 dark:border-dark-borderLight/20">
              <h3 className="font-bold mb-4 text-light-secondary dark:text-dark-secondary">State & API</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral">Redux</Badge>
                <Badge variant="neutral">Context API</Badge>
                <Badge variant="neutral">GraphQL</Badge>
                <Badge variant="neutral">RESTful APIs</Badge>
                <Badge variant="neutral">React Hooks</Badge>
              </div>
            </Card>
            <Card className="p-6 bg-light-surface dark:bg-dark-surface border-light-borderLight/20 dark:border-dark-borderLight/20">
              <h3 className="font-bold mb-4 text-light-accent dark:text-dark-accent">Tools & UI</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral">Tailwind CSS</Badge>
                <Badge variant="neutral">Material UI</Badge>
                <Badge variant="neutral">Styled Comp.</Badge>
                <Badge variant="neutral">Git & GitHub</Badge>
                <Badge variant="neutral">CI/CD</Badge>
              </div>
            </Card>
            <Card className="p-6 bg-light-surface dark:bg-dark-surface border-light-borderLight/20 dark:border-dark-borderLight/20">
              <h3 className="font-bold mb-4 text-green-400 dark:text-green-300">
                Testing & Performance
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral">Jest</Badge>
                <Badge variant="neutral">React Testing Lib</Badge>
                <Badge variant="neutral">Core Web Vitals</Badge>
                <Badge variant="neutral">Lighthouse</Badge>
                <Badge variant="neutral">Lazy Loading</Badge>
              </div>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-light-textPrimary dark:text-dark-textPrimary">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="neutral" className="bg-light-surface/50 dark:bg-dark-surface/50 border-light-borderLight/10 dark:border-dark-borderLight/10">
                Agile / Scrum
              </Badge>
              <Badge variant="neutral" className="bg-light-surface/50 dark:bg-dark-surface/50 border-light-borderLight/10 dark:border-dark-borderLight/10">
                Team Mentorship
              </Badge>
              <Badge variant="neutral" className="bg-light-surface/50 dark:bg-dark-surface/50 border-light-borderLight/10 dark:border-dark-borderLight/10">
                Problem Solving
              </Badge>
              <Badge variant="neutral" className="bg-light-surface/50 dark:bg-dark-surface/50 border-light-borderLight/10 dark:border-dark-borderLight/10">
                Cross-functional Collaboration
              </Badge>
              <Badge variant="neutral" className="bg-light-surface/50 dark:bg-dark-surface/50 border-light-borderLight/10 dark:border-dark-borderLight/10">
                Requirement Analysis
              </Badge>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;
