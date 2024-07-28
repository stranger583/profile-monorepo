import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
    },

    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      colors: {
        background:'rgba(var(--background))',
        section:'rgba(var(--section))',
        card:'rgba(var(--card))',
        input:'rgba(var(--input))',
        tag:'rgba(var(--background))',
        border:'rgba(var(--border))',
        primary:'rgba(var(--primary))',
        secondary:'rgba(var(--secondary))',
        primaryText:'rgba(var(--primaryText))',
        secondaryText:'rgba(var(--secondaryText))'
      }
    },
  },
  plugins: [],
};
export default config;