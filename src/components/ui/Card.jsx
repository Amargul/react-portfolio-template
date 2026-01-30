const Card = ({ children, className = "", hoverEffect = false, ...props }) => {
  return (
    <div
      className={`bg-light-surface dark:bg-dark-surface rounded-xl shadow-card border border-light-borderLight dark:border-dark-borderLight p-6 transition-all duration-300 ${hoverEffect
          ? "hover:shadow-glow hover:-translate-y-1 hover:border-light-primary/50 dark:hover:border-dark-primary/50"
          : ""
        } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
