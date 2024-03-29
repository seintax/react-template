module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            msm: { max: "640px" },
            mmd: { max: "768px" },
            mlg: { max: "1024px" },
            mxl: { max: "1280px" },
            m2xl: { max: "1536px" },
        },
        extend: {
            keyframes: {
                'fade-in-left': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                }
            },
            animation: {
                'fade-in-left': 'fade-in-left 0.7s ease-out',
                'spin-slow': 'spin 10s linear infinite',
                'spin-slower': 'spin 9s linear infinite',
            }
        },
    },
}
