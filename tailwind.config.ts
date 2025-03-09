// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}', // Adjusted for /src/app structure
  ],
  theme: {
    extend: {
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
      },
      animation: {
        'ping-large': 'ping-large 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;