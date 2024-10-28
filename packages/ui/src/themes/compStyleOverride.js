// Flowise/packages/ui/themes/componentStyleOverride.js

export default function componentStyleOverrides(theme) {
    const bgColor = '#000000'; // Black background

    return {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: bgColor, // Black background
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
                    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#00CC00',
                    },
                    '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
                        backgroundColor: '#009900',
                    },
                    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                        backgroundColor: '#000000',
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
                    backgroundColor: 'transparent',
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
                    textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00',
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
                    color: '#00FF00',
                },
                rounded: {
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: '#00FF00',
                    padding: '24px',
                    backgroundColor: '#001100', // Dark greenish background for headers
                },
                title: {
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    textShadow: '0 0 5px #00FF00',
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px',
                    backgroundColor: '#000000',
                    color: '#00FF00',
                },
            },
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '24px',
                    backgroundColor: '#001100',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: '#00FF00',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    '&.Mui-selected': {
                        color: '#00CC00',
                        backgroundColor: '#002200',
                        '&:hover': {
                            backgroundColor: '#002200',
                        },
                        '& .MuiListItemIcon-root': {
                            color: '#00CC00',
                        },
                    },
                    '&:hover': {
                        backgroundColor: '#001100',
                        color: '#00CC00',
                        '& .MuiListItemIcon-root': {
                            color: '#00CC00',
                        },
                    },
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: '#00FF00',
                    minWidth: '36px',
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: '#00FF00',
                    textShadow: '0 0 3px #00FF00',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: '#00FF00',
                    fontFamily: '"Courier New", Courier, monospace',
                    '&::placeholder': {
                        color: '#00CC00',
                        fontSize: '0.875rem',
                        opacity: 0.7,
                    },
                    '&.Mui-disabled': {
                        WebkitTextFillColor: '#006600',
                        opacity: 0.5,
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: '#000000',
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#00FF00',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#00CC00',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#00CC00',
                        borderWidth: '2px',
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1,
                    },
                },
                input: {
                    fontWeight: 500,
                    background: '#000000',
                    padding: '15.5px 14px',
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                    fontFamily: '"Courier New", Courier, monospace',
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '10px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0,
                        },
                    },
                },
                inputAdornedStart: {
                    paddingLeft: 4,
                },
                notchedOutline: {
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    color: '#00FF00',
                    '&.Mui-disabled': {
                        color: '#006600',
                    },
                },
                mark: {
                    backgroundColor: '#00FF00',
                    width: '4px',
                },
                valueLabel: {
                    color: '#00FF00',
                    backgroundColor: '#000000',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#00FF00',
                    opacity: 1,
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: '#00FF00',
                    background: '#003300',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: '#001100',
                    color: '#00FF00',
                    '&.MuiChip-deletable .MuiChip-deleteIcon': {
                        color: '#00CC00',
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: '#000000',
                    backgroundColor: '#00FF00',
                    boxShadow: '0 0 10px #00FF00',
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                option: {
                    '&:hover': {
                        background: '#001100 !important',
                        color: '#00CC00',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#002200 !important',
                        color: '#00FF00',
                        '&:hover': {
                            backgroundColor: '#002200 !important',
                        },
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#00FF00',
                    textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00',
                },
            },
        },
        // Add more component overrides as needed
    };
}
