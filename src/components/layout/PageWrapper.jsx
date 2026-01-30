import Header from "./Header";
import Footer from "./Footer";

const PageWrapper = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-light-textPrimary dark:text-dark-textPrimary bg-light-background dark:bg-dark-background transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-24 pb-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
