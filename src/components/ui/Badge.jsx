const Badge = ({ children, variant = "neutral", className = "" }) => {
  const variants = {
    neutral: "bg-light-surface dark:bg-dark-surface text-light-textSecondary dark:text-dark-textSecondary border-light-borderLight dark:border-dark-borderLight",
    primary: "bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary border-light-primary/20 dark:border-dark-primary/20",
    success: "bg-light-success/10 dark:bg-dark-success/10 text-light-success dark:text-dark-success border-light-success/20 dark:border-dark-success/20",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
