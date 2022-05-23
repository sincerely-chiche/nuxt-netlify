module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "*.vue",
    ],
    theme: {
        extend: {
            gridTemplateRows: {
                "[auto,auto,1fr]": "auto auto 1fr",
            },
            colors: {
                primary: "#ffbc8c",
                secondary: "#599eed",
                link: "#11111100",
            },
            fontFamily: {
                raleway: ["Raleway"],
            },
        },
    },
    plugins: [
        // ...
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
    ],
};