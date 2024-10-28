export default function componentStyleOverrides(theme) {
    const bgColor = theme.colors?.grey900; // Dark background

    return {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#000000', // Black background
                    color: '#00FF00', // Neon green text
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#00FF00 #000000',
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        width: 12,
                        height: 12,
                        backgroundColor: '#000000',
                    },
                    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                        borderRadius: 8,
                        backgroundColor: '#00FF00',
                        minHeight: 24,
                        border: '3px solid #000000',
                    },
                    // Additional scrollbar hover and active styles
                    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#00CC00',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: '4px',
                    color: '#00FF00',
                    border: '1px solid #00FF00',
                    '&:hover': {
                        backgroundColor: '#003300',
                        borderColor: '#00CC00',
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#00FF00',
                },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#000000', // Black paper background
                },
                rounded: {
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                },
            },
        },
        // Override other components similarly...
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#00FF00',
                },
            },
        },
        // Add more component overrides as needed
    };
}
