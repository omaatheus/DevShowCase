import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#FFFFFF", // Branco para o fundo principal
        "background-secondary": "#F5F7FA", // Azul bem claro para o fundo secundário
        "background-tertiary": "#E3E9F0", // Azul suave para o fundo terciário
        "content-body": "#2C3E50", // Azul escuro para o texto
        "content-placeholder": "#7F8C8D", // Azul acinzentado para placeholders
        "content-headline": "#34495E", // Azul médio para manchetes
        "border-primary": "#D6DBE1", // Azul claro para bordas principais
        "border-secondary": "#AAB3BE", // Azul acinzentado para bordas secundárias
        "border-tertiary": "#718093", // Azul mais escuro para bordas terciárias
        "accent-blue": "#2980B9", // Azul vibrante para destaque
        "accent-light-blue": "#3498DB", // Azul claro para destaque
        "accent-orange": "#E67E22", // Laranja para destaque
        "accent-red": "#FF0000"
    },
    
    },
  },
  plugins: [],
} satisfies Config;
