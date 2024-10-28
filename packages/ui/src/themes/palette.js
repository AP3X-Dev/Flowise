/**
 * Color palette for Matrix-themed UI
 * @param {JsonObject} theme Theme customization object
 */
export default function themePalette(theme) {
    return {
        mode: 'dark', // Ensure dark mode is active
        primary: {
            light: '#00CC00',
            main: '#00FF00', // Neon green
            dark: '#009900',
            contrastText: '#000000',
        },
        secondary: {
            light: '#004D00',
            main: '#006600',
            dark: '#003300',
            contrastText: '#FFFFFF',
        },
        background: {
            paper: '#000000', // Black backgrounds
            default: '#000000',
        },
        text: {
            primary: '#00FF00',
            secondary: '#00CC00',
            disabled: '#006600',
            hint: '#009900',
        },
        divider: '#00FF00',
        // Additional palette configurations as needed
    };
}
