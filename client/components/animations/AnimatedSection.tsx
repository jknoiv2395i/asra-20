import React from "react";
import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";

// Fade up animation - most common pattern
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Fade in animation - simple opacity
const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Scale up animation
const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const variantMap = {
  "fade-up": fadeUpVariants,
  "fade-in": fadeInVariants,
  "scale-up": scaleUpVariants,
};

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: keyof typeof variantMap;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "h2" | "h3" | "p" | "span";
  style?: React.CSSProperties;
}

/**
 * Wrapper that animates its children when they scroll into view.
 * Uses `whileInView` so animation triggers once when 20% visible.
 */
export function AnimatedSection({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className,
  as = "div",
  style,
}: AnimatedSectionProps) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  as?: "div" | "section" | "ul";
  style?: React.CSSProperties;
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/**
 * Container that staggers the animation of its direct children.
 * Each child should use `AnimatedItem` to animate.
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.15,
  className,
  as = "div",
  style,
}: StaggerContainerProps) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: keyof typeof variantMap;
}

/**
 * Item inside a StaggerContainer that animates when the container comes into view.
 */
export function AnimatedItem({
  children,
  className,
  style,
  variant = "fade-up",
}: AnimatedItemProps) {
  return (
    <motion.div
      variants={variantMap[variant]}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Animated counter that counts from 0 to target when scrolled into view.
 */
export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
}: CounterProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {prefix}
      </motion.span>
      <CounterNumber target={target} duration={duration} />
      <motion.span>{suffix}</motion.span>
    </motion.span>
  );
}

function CounterNumber({
  target,
  duration,
}: {
  target: number;
  duration: number;
}) {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      if (now >= endTime) {
        setCount(target);
        return;
      }
      const progress = (now - startTime) / (duration * 1000);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref}>{count}</span>;
}

