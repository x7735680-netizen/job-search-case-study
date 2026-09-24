import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./page/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111111",
          2: "#5F6470",
          3: "#8B92A1",
        },
        base: "#F8FAFC",
        card: "#FFFFFF",
        soft: "#EAF3FC",
        line: "#E7ECF2",
        accent: "#CFE2F7",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
        "hero-text": "880px",
        showcase: "1120px",
      },
      letterSpacing: {
        tightish: "-0.025em",
        tightest: "-0.03em",
      },
      fontSize: {
        eyebrow: ["13px", { lineHeight: "1.4", letterSpacing: "0.04em" }],
      },
    },
  },
  plugins: [],
};

export default config;
