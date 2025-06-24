import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(210, 16%, 82%)',
				input: 'hsl(210, 16%, 96%)',
				ring: 'hsl(215, 20%, 65%)',
				background: 'hsl(0, 0%, 100%)',
				foreground: 'hsl(222, 47%, 11%)',
				primary: {
					DEFAULT: 'hsl(221, 83%, 53%)',
					foreground: 'hsl(0, 0%, 100%)'
				},
				secondary: {
					DEFAULT: 'hsl(217, 19%, 38%)',
					foreground: 'hsl(210, 20%, 98%)'
				},
				destructive: {
					DEFAULT: 'hsl(0, 100%, 50%)',
					foreground: 'hsl(0, 0%, 100%)'
				},
				muted: {
					DEFAULT: 'hsl(210, 16%, 93%)',
					foreground: 'hsl(215, 15%, 40%)'
				},
				accent: {
					DEFAULT: 'hsl(210, 100%, 60%)',
					foreground: 'hsl(0, 0%, 100%)'
				},
				popover: {
					DEFAULT: 'hsl(0, 0%, 100%)',
					foreground: 'hsl(222, 47%, 11%)'
				},
				card: {
					DEFAULT: 'hsl(0, 0%, 100%)',
					foreground: 'hsl(222, 47%, 11%)'
				},
				sidebar: {
					DEFAULT: 'hsl(220, 13%, 18%)',
					foreground: 'hsl(0, 0%, 100%)',
					primary: 'hsl(221, 83%, 53%)',
					'primary-foreground': 'hsl(0, 0%, 100%)',
					accent: 'hsl(210, 100%, 60%)',
					'accent-foreground': 'hsl(0, 0%, 100%)',
					border: 'hsl(218, 15%, 25%)',
					ring: 'hsl(215, 20%, 65%)'
				}
			},
			borderRadius: {
				lg: '0.5rem',
				md: '0.375rem',
				sm: '0.25rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
