import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import PageWrapper from "../components/layout/PageWrapper";
import Button from "../components/ui/Button";
import { siteConfig } from "../config/site.config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
    alert("Message sent! (Simulation)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageWrapper>
      <div className="container px-4 mx-auto py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary">
            Get In Touch
          </h1>
          <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">
            Have a project in mind or want to discuss a new opportunity? Feel
            free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-2xl border border-light-borderLight/20 dark:border-dark-borderLight/20 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full flex items-center justify-center text-light-primary dark:text-dark-primary text-xl flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-light-textPrimary dark:text-dark-textPrimary">Email</h4>
                    <a
                      href={`mailto:${siteConfig.contact?.email}`}
                      className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                    >
                      {siteConfig.contact?.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full flex items-center justify-center text-light-secondary dark:text-dark-secondary text-xl flex-shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-bold text-light-textPrimary dark:text-dark-textPrimary">Phone</h4>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary">{siteConfig.contact?.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full flex items-center justify-center text-light-accent dark:text-dark-accent text-xl flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-light-textPrimary dark:text-dark-textPrimary">Location</h4>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary">
                      {siteConfig.contact?.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-light-surface dark:bg-dark-surface border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-full flex items-center justify-center text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary hover:border-light-primary dark:hover:border-dark-primary transition-all text-xl"
              >
                <FaLinkedin />
              </a>
              {/* LinkedIn is the primary social provided, focusing on that. */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-2xl border border-light-borderLight/20 dark:border-dark-borderLight/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary">
              Send a Message
            </h3>
            <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-4 rounded-lg bg-light-surface/50 dark:bg-dark-surface/50 px-4 py-2 border border-light-borderLight/20 dark:border-dark-borderLight/20">
              This is a demo contact form. Submissions are not sent anywhere.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-light-background dark:bg-dark-background border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-lg text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:border-light-primary dark:focus:border-dark-primary focus:ring-1 focus:ring-light-primary dark:focus:ring-dark-primary transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-light-background dark:bg-dark-background border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-lg text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:border-light-primary dark:focus:border-dark-primary focus:ring-1 focus:ring-light-primary dark:focus:ring-dark-primary transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-light-background dark:bg-dark-background border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-lg text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:border-light-primary dark:focus:border-dark-primary focus:ring-1 focus:ring-light-primary dark:focus:ring-dark-primary transition-colors"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-light-background dark:bg-dark-background border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-lg text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:border-light-primary dark:focus:border-dark-primary focus:ring-1 focus:ring-light-primary dark:focus:ring-dark-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
