import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  to,
  onClick,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-background dark:focus:ring-offset-dark-background disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-light-primary dark:bg-dark-primary text-white hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 shadow-glow focus:ring-light-primary dark:focus:ring-dark-primary",
    secondary:
      "bg-light-secondary dark:bg-dark-secondary text-light-background dark:text-dark-background hover:bg-light-secondary/90 dark:hover:bg-dark-secondary/90 shadow-lg shadow-light-secondary/30 dark:shadow-dark-secondary/30 focus:ring-light-secondary dark:focus:ring-dark-secondary font-bold",
    outline:
      "bg-transparent border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white focus:ring-light-primary dark:focus:ring-dark-primary",
    ghost:
      "bg-transparent text-light-primary dark:text-dark-primary hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 focus:ring-light-primary dark:focus:ring-dark-primary",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
