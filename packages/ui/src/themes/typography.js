// Flowise/packages/ui/themes/typography.js

/**
 * Typography settings for Matrix-themed UI with adjusted dark grey background and updated green
 * @param {JsonObject} theme Theme customization object
 */
export default function themeTypography(theme) {
    const darkGrey = '#121212'; // Dark grey background
    const green = '#12E385'; // Updated green color

    return {
        fontFamily: '"Courier New", Courier, monospace', // Monospaced font
        h1: {
            fontSize: '2.125rem',
            fontWeight: 700,
            color: green,
            textShadow: '0 0 3px #12E385, 0 0 6px #12E385', // Reduced glow
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: green,
            textShadow: '0 0 3px #12E385, 0 0 6px #12E385', // Reduced glow
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: green,
            textShadow: '0 0 3px #12E385, 0 0 6px #12E385', // Reduced glow
        },
        h4: {
            fontSize: '1rem',
            fontWeight: 600,
            color: green,
            textShadow: '0 0 3px #12E385, 0 0 6px #12E385', // Reduced glow
        },
        h5: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: green,
            textShadow: '0 0 2px #12E385', // Reduced glow
        },
        h6: {
            fontSize: '0.75rem',
            fontWeight: 500,
            color: green,
            textShadow: '0 0 2px #12E385', // Reduced glow
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: green,
            textShadow: '0 0 1px #12E385', // Reduced glow
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: '#10C572', // Slightly darker green
            textShadow: '0 0 1px #10C572', // Reduced glow
        },
        body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.334em',
            color: green,
            textShadow: '0 0 1px #12E385', // Reduced glow
        },
        body2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: '#10C572', // Slightly darker green
            textShadow: '0 0 1px #10C572', // Reduced glow
        },
        button: {
            textTransform: 'capitalize',
            fontWeight: 500,
            color: green,
            textShadow: '0 0 2px #12E385', // Reduced glow
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: '#10C572', // Slightly darker green
            textShadow: '0 0 1px #10C572', // Reduced glow
        },
        customInput: {
            marginTop: 1,
            marginBottom: 1,
            '& > label': {
                top: 23,
                left: 0,
                color: '#10C572', // Slightly darker green
                '&[data-shrink="false"]': {
                    top: 5,
                },
            },
            '& > div > input': {
                padding: '30.5px 14px 11.5px !important',
                fontFamily: '"Courier New", Courier, monospace',
            },
            '& legend': {
                display: 'none',
            },
            '& fieldset': {
                top: 0,
            },
        },
        mainContent: {
            backgroundColor: darkGrey,
            width: '100%',
            minHeight: 'calc(100vh - 75px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '75px',
            marginRight: '20px',
            borderRadius: `${theme?.customization?.borderRadius}px`,
            color: green,
            textShadow: '0 0 1px #12E385', // Reduced glow
        },
        menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: green,
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px',
            textShadow: '0 0 1px #12E385', // Reduced glow
        },
        subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: '#10C572', // Slightly darker green
            textTransform: 'capitalize',
            textShadow: '0 0 1px #10C572', // Reduced glow
        },
        commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px',
        },
        smallAvatar: {
            width: '22px',
            height: '22px',
            fontSize: '1rem',
        },
        mediumAvatar: {
            width: '34px',
            height: '34px',
            fontSize: '1.2rem',
        },
        largeAvatar: {
            width: '44px',
            height: '44px',
            fontSize: '1.5rem',
        },
    };
}
