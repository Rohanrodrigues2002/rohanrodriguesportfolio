import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "",
  type = "button",
  disabled = false
}: AnimatedButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold text-sm relative overflow-hidden transition-all duration-300";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-neon-cyan to-neon-violet text-background",
    secondary: "bg-gradient-to-r from-neon-violet to-neon-pink text-foreground",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-background"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variantStyles[variant], className, disabled && "opacity-50 cursor-not-allowed")}
      whileHover={!disabled ? { scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
