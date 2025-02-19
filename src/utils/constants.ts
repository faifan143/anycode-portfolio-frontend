// constants/theme.ts

export const themeColors = {
  primary: {
    DEFAULT: "from-orange-500 to-orange-400",
    hover: "bg-orange-500",
    light: "bg-orange-500/90",
    text: "text-orange-400",
    hover_bg: "hover:bg-orange-500",
  },
  background: {
    DEFAULT: "bg-gray-900/90",
    lighter: "bg-gray-800/50",
    darker: "bg-gray-900/95",
  },
  border: {
    DEFAULT: "border-gray-800",
  },
  text: {
    primary: "text-white",
    secondary: "text-gray-300",
    muted: "text-gray-400",
  },
  hover: {
    item: "hover:bg-gray-800/50",
  },
} as const;

export const gradients = {
  primary: "bg-gradient-to-r from-orange-500 to-orange-400",
  background: "bg-gradient-to-r from-gray-900 to-gray-800",
} as const;

export const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  },
} as const;

export const commonStyles = {
  section: "py-16",
  container: "container mx-auto px-4",
  card: "backdrop-blur-md border rounded-xl overflow-hidden",
} as const;
