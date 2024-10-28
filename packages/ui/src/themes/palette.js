// Flowise/packages/ui/themes/palette.js

/**
 * Color palette for Matrix-themed UI with adjusted dark grey background and updated green
 * @param {JsonObject} theme Theme customization object
 */
export default function themePalette(theme) {
    const darkGrey = '#121212'; // Dark grey background
    const green = '#12E385'; // Updated green color

    return {
        mode: 'dark', // Ensure dark mode is active
        transparent: '#00000000',
        common: {
            black: darkGrey,
            dark: green, // Updated to new green
        },
        primary: {
            light: '#0FC573', // Slightly darker green
            main: green, // Updated green
            dark: '#0BA15E', // Darker shade for primary.dark
            contrastText: darkGrey, // Dark grey for contrast
            200: '#1AE5A3', // Light variant
            800: '#0B8F5E', // Dark variant
        },
        secondary: {
            light: '#004D00',
            main: '#006600',
            dark: '#003300',
            contrastText: '#FFFFFF',
            200: '#10C572', // Slightly darker green
            800: '#001100',
        },
        error: {
            light: '#FF6666',
            main: '#FF0000',
            dark: '#990000',
        },
        orange: {
            light: '#FFB74D',
            main: '#FF9800',
            dark: '#F57C00',
        },
        teal: {
            light: '#4DB6AC',
            main: '#009688',
            dark: '#00796B',
        },
        warning: {
            light: '#FFCC80',
            main: '#FF9800',
            dark: '#F57C00',
        },
        success: {
            light: '#81C784',
            main: '#4CAF50',
            dark: '#388E3C',
            200: '#66FF66',
            800: '#1B5E20',
        },
        grey: {
            50: '#121212', // Dark grey instead of black
            100: '#1a1a1a',
            200: '#2b2b2b',
            300: '#3c3c3c',
            500: '#4d4d4d',
            600: '#5e5e5e',
            700: '#6f6f6f',
            900: green, // Updated to new green
        },
        dark: {
            light: '#004D00',
            main: '#003300',
            dark: '#001100',
            800: darkGrey, // Dark grey
            900: darkGrey, // Dark grey
        },
        text: {
            primary: green,
            secondary: '#10C572', // Slightly darker green
            dark: '#0BA15E', // Darker green
            hint: '#006600',
        },
        background: {
            paper: darkGrey, // Dark grey backgrounds
            default: darkGrey,
        },
        card: {
            main: darkGrey,
            light: '#001100',
            hover: '#002200',
        },
        asyncSelect: {
            main: green,
        },
        timeMessage: {
            main: '#10C572', // Slightly darker green
        },
        canvasHeader: {
            deployLight: '#10C572', // Slightly darker green
            deployDark: '#0BA15E', // Darker green
            saveLight: '#10C572', // Slightly darker green
            saveDark: '#0BA15E', // Darker green
            settingsLight: green,
            settingsDark: '#10C572', // Slightly darker green
        },
        codeEditor: {
            main: darkGrey,
        },
        nodeToolTip: {
            background: darkGrey,
            color: 'rgba(18, 227, 133, 0.87)', // Updated green with RGBA
        },
        divider: green,
    };
}
