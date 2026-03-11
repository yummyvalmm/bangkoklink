/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Bangkok Link brand colors - Deeper Navy primary for a more premium look
                primary: {
                    DEFAULT: '#141E33', // Deep Midnight Navy
                    light: '#2B3A67',   // Original Navy
                },
                secondary: '#0F172A',   // Even deeper navy for backgrounds
                accent: {
                    DEFAULT: '#D4AF37', // True Metallic Gold
                    light: '#F4E4BC',   // Soft Champagne
                    rich: '#B8860B',    // Dark Goldenrod
                },
                background: {
                    DEFAULT: '#FDFDFB',  // Very soft warm white
                    card: '#FFFFFF',     // Pure white
                    subtle: '#F8F8F7',   // Subtle section color
                    dark: '#0A0F1D',     // Deepest navy for footer/dark UI
                },
                text: {
                    primary: '#111827',    // Near black
                    secondary: '#4B5563',  // Dark grey
                    muted: '#9CA3AF',      // Muted grey
                },
                border: {
                    light: '#F3F4F6',
                    DEFAULT: '#E5E7EB',
                },
            },
            fontFamily: {
                display: ['Cormorant Garamond', 'serif'],
                sans: ['Outfit', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'minimal': '0 1px 2px rgba(0, 0, 0, 0.02)',
                'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.08)',
                'button': '0 2px 4px rgba(20, 30, 51, 0.1)',
                'button-hover': '0 4px 8px rgba(20, 30, 51, 0.15)',
            },
        },
    },
    plugins: [],
}
