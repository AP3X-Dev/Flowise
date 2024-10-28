// Flowise/packages/ui/themes/componentStyleOverride.js

export default function componentStyleOverrides(theme) {
    const darkGrey = '#121212'; // Dark grey background
    const green = '#12E385'; // Updated green color

    return {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: darkGrey, // Dark grey background
                    color: green, // Updated green text
                    scrollbarWidth: 'thin',
                    scrollbarColor: `${green} ${darkGrey}`,
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        width: 12,
                        height: 12,
                        backgroundColor: darkGrey,
                    },
                    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                        borderRadius: 8,
                        backgroundColor: green,
                        minHeight: 24,
                        border: `3px solid ${darkGrey}`,
                    },
                    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#10C572', // Slightly darker shade for hover
                    },
                    '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
                        backgroundColor: '#0EB65A', // Even darker for active state
                    },
                    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                        backgroundColor: darkGrey,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: '4px',
                    color: green,
                    border: `1px solid ${green}`,
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: '#002215', // Darker background on hover
                        borderColor: '#10C572', // Slightly darker green on hover
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: green,
                    textShadow: '0 0 3px #12E385, 0 0 6px #12E385', // Reduced glow
                },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundColor: darkGrey, // Dark grey paper background
                    color: green,
                },
                rounded: {
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: green,
                    padding: '24px',
                    backgroundColor: '#001100', // Dark greenish background for headers
                },
                title: {
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    textShadow: '0 0 3px #12E385', // Reduced glow
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px',
                    backgroundColor: darkGrey,
                    color: green,
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
                    color: green,
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    '&.Mui-selected': {
                        color: '#10C572', // Slightly darker green for selected state
                        backgroundColor: '#002200',
                        '&:hover': {
                            backgroundColor: '#002200',
                        },
                        '& .MuiListItemIcon-root': {
                            color: '#10C572',
                        },
                    },
                    '&:hover': {
                        backgroundColor: '#001100',
                        color: '#10C572',
                        '& .MuiListItemIcon-root': {
                            color: '#10C572',
                        },
                    },
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: green,
                    minWidth: '36px',
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: green,
                    textShadow: '0 0 2px #12E385', // Reduced glow
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: green,
                    fontFamily: '"Courier New", Courier, monospace',
                    '&::placeholder': {
                        color: '#10C572', // Slightly darker green for placeholder
                        fontSize: '0.875rem',
                        opacity: 0.7,
                    },
                    '&.Mui-disabled': {
                        WebkitTextFillColor: '#0EB65A', // Darker green for disabled state
                        opacity: 0.5,
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: darkGrey,
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: green,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#10C572', // Slightly darker green on hover
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#10C572', // Slightly darker green on focus
                        borderWidth: '2px',
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1,
                    },
                },
                input: {
                    fontWeight: 500,
                    background: darkGrey,
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
                    color: green,
                    '&.Mui-disabled': {
                        color: '#0EB65A', // Darker green for disabled slider
                    },
                },
                mark: {
                    backgroundColor: green,
                    width: '4px',
                },
                valueLabel: {
                    color: green,
                    backgroundColor: darkGrey,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: green,
                    opacity: 1,
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: green,
                    background: '#003300',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: '#001100',
                    color: green,
                    '&.MuiChip-deletable .MuiChip-deleteIcon': {
                        color: '#10C572', // Slightly darker green for delete icon
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: darkGrey, // Dark grey text for tooltips
                    backgroundColor: green,
                    boxShadow: '0 0 5px #12E385', // Reduced glow
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                option: {
                    '&:hover': {
                        background: '#001100 !important',
                        color: '#10C572',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#002200 !important',
                        color: green,
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
                    color: green,
                    textShadow: '0 0 3px #12E385, 0 0 6px #12E385', // Reduced glow
                },
            },
        },
        // Add more component overrides as needed
    };
}
