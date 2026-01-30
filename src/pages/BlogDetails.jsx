import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaClock, FaUser } from "react-icons/fa";
import PageWrapper from "../components/layout/PageWrapper";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { blogs } from "../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <PageWrapper>
        <div className="container px-4 mx-auto text-center py-20">
          <h1 className="text-3xl font-bold mb-4 text-light-textPrimary dark:text-dark-textPrimary">Article Not Found</h1>
          <Button to="/blogs" variant="primary">
            Back to Blogs
          </Button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="container px-4 mx-auto max-w-4xl pt-12 pb-24">
        <Link
          to="/blogs"
          className="inline-flex items-center text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Articles
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <Badge variant="primary">{blog.category}</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-light-textPrimary dark:text-dark-textPrimary leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-light-textSecondary dark:text-dark-textSecondary text-sm">
            <span className="flex items-center gap-2">
              <FaUser /> {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <FaClock /> {blog.readTime}
            </span>
            <span>{blog.date}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="h-64 md:h-96 bg-light-surface dark:bg-dark-surface border border-light-borderLight/20 dark:border-dark-borderLight/20 rounded-2xl flex items-center justify-center text-9xl shadow-glow mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-light-surface/80 dark:to-dark-surface/80"></div>
          <span className="relative z-10">{blog.image}</span>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none mx-auto text-light-textSecondary dark:text-dark-textSecondary">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        <div className="mt-16 pt-8 border-t border-light-borderLight/20 dark:border-dark-borderLight/20 text-center">
          <h3 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">
            Enjoyed this article?
          </h3>
          <p className="text-light-textSecondary dark:text-dark-textSecondary mb-8">
            Feel free to share it or reach out to discuss.
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/contact" variant="primary">
              Hire Me
            </Button>
            <Button to="/blogs" variant="outline">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BlogDetails;
