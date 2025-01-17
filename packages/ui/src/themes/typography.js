// Flowise/packages/ui/themes/typography.js

/**
 * Typography settings for Matrix-themed UI
 * @param {JsonObject} theme Theme customization object
 */
export default function themeTypography(theme) {
    const borderRadius = theme?.customization?.borderRadius || 4; // Ensure borderRadius is defined

    return {
        fontFamily: '"Courier New", Courier, monospace', // Monospaced font
        h1: {
            fontSize: '2.125rem',
            fontWeight: 700,
            color: '#00FF00',
            textShadow: '0 0 2px #00FF00', // Reduced shadow
            // Removed responsive typography for stability
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#00FF00',
            textShadow: '0 0 2px #00FF00', // Reduced shadow
            // Removed responsive typography for stability
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#00FF00',
            textShadow: '0 0 2px #00FF00', // Reduced shadow
            // Removed responsive typography for stability
        },
        h4: {
            fontSize: '1rem',
            fontWeight: 600,
            color: '#00FF00',
            textShadow: '0 0 2px #00FF00', // Reduced shadow
            // Removed responsive typography for stability
        },
        h5: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#00FF00',
            textShadow: '0 0 1px #00FF00', // Reduced shadow
        },
        h6: {
            fontSize: '0.75rem',
            fontWeight: 500,
            color: '#00FF00',
            textShadow: '0 0 1px #00FF00', // Reduced shadow
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#00FF00',
            textShadow: '0 0 1px #00FF00', // Reduced shadow
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: '#00CC00',
            textShadow: '0 0 1px #00CC00', // Reduced shadow
        },
        body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.334em',
            color: '#00FF00',
            textShadow: '0 0 1px #00FF00', // Reduced shadow
        },
        body2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: '#00CC00',
            textShadow: '0 0 1px #00CC00', // Reduced shadow
        },
        button: {
            textTransform: 'capitalize',
            fontWeight: 500,
            color: '#00FF00',
            textShadow: '0 0 1px #00FF00', // Reduced shadow
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: '#00CC00',
            textShadow: '0 0 1px #00CC00', // Reduced shadow
        },
        customInput: {
            marginTop: 1,
            marginBottom: 1,
            '& > label': {
                top: 23,
                left: 0,
                color: '#00CC00',
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
            backgroundColor: '#000000',
            width: '100%',
            minHeight: 'calc(100vh - 75px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '75px',
            marginRight: '20px',
            borderRadius: `${borderRadius}px`,
            color: '#00FF00',
            textShadow: '0 0 1px #00FF00', // Reduced shadow
        },
        menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#00FF00',
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px',
            textShadow: '0 0 1px #00FF00', // Reduced shadow
        },
        subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: '#00CC00',
            textTransform: 'capitalize',
            textShadow: '0 0 1px #00CC00', // Reduced shadow
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
