import { useState } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { blogs } from "../data/blogs";
import { FaSearch } from "react-icons/fa";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <PageWrapper>
      <div className="container px-4 mx-auto py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Insights & Thoughts
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary">
            Latest Articles
          </h1>
          <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary mb-8">
            Expert insights on React, Headless Commerce, and Modern Web
            Development.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-light-surface dark:bg-dark-surface border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-full text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:border-light-primary dark:focus:border-dark-primary focus:ring-1 focus:ring-light-primary dark:focus:ring-dark-primary shadow-lg pl-12"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light-textSecondary dark:text-dark-textSecondary" />
          </div>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredBlogs.map((blog) => (
              <Card
                key={blog.id}
                hoverEffect
                className="flex flex-col h-full bg-light-surface dark:bg-dark-surface border-light-borderLight/20 dark:border-dark-borderLight/20 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 -mx-6 -mt-6 mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500 border-b border-light-borderLight/10 dark:border-dark-borderLight/10 relative">
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="neutral"
                      className="bg-black/40 dark:bg-black/60 backdrop-blur-md border-light-borderLight/20 dark:border-dark-borderLight/20"
                    >
                      {blog.category}
                    </Badge>
                  </div>
                  {blog.image}
                </div>

                <div className="flex items-center gap-4 text-xs text-light-textSecondary dark:text-dark-textSecondary mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold mb-3 text-light-textPrimary dark:text-dark-textPrimary group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                  {blog.title}
                </h2>
                <p className="text-light-textSecondary dark:text-dark-textSecondary mb-6 flex-grow line-clamp-2">
                  {blog.excerpt}
                </p>

                <Button
                  to={`/blogs/${blog.id}`}
                  variant="outline"
                  className="w-full mt-auto"
                >
                  Read Article
                </Button>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-light-textSecondary dark:text-dark-textSecondary text-xl">
              No articles found matching your search.
            </p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Blogs;
