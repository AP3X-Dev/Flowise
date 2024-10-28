// Flowise/packages/ui/themes/palette.js

/**
 * Color palette for Matrix-themed UI
 * @param {JsonObject} theme Theme customization object
 */
export default function themePalette(theme) {
    return {
        mode: 'dark', // Ensure dark mode is active
        transparent: '#00000000',
        common: {
            black: '#000000',
            dark: '#00FF00', // Neon green
        },
        primary: {
            light: '#00CC00',
            main: '#00FF00', // Neon green
            dark: '#009900',
            contrastText: '#000000',
            200: '#66FF66',
            800: '#003300',
        },
        secondary: {
            light: '#004D00',
            main: '#006600',
            dark: '#003300',
            contrastText: '#FFFFFF',
            200: '#00CC00',
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
            50: '#000000',
            100: '#001100',
            200: '#002200',
            300: '#003300',
            500: '#004D00',
            600: '#005500',
            700: '#006600',
            900: '#00FF00',
        },
        dark: {
            light: '#004D00',
            main: '#003300',
            dark: '#001100',
            800: '#000000',
            900: '#000000',
        },
        text: {
            primary: '#00FF00',
            secondary: '#00CC00',
            dark: '#009900',
            hint: '#006600',
        },
        background: {
            paper: '#000000', // Black backgrounds
            default: '#000000',
        },
        card: {
            main: '#000000',
            light: '#001100',
            hover: '#002200',
        },
        asyncSelect: {
            main: '#00FF00',
        },
        timeMessage: {
            main: '#00CC00',
        },
        canvasHeader: {
            deployLight: '#00CC00',
            deployDark: '#009900',
            saveLight: '#00CC00',
            saveDark: '#009900',
            settingsLight: '#00FF00',
            settingsDark: '#00CC00',
        },
        codeEditor: {
            main: '#000000',
        },
        nodeToolTip: {
            background: '#000000',
            color: 'rgba(0, 255, 0, 0.87)', // Neon green text
        },
        divider: '#00FF00',
    };
}
