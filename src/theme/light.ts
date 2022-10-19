interface ThemeType {
    colors: {
        [key : string]: string
    }
    fontSizes: {
        [key : string]: string
    }
    fonts: {
        [key : string]: string
    }
    fontWeight: {
        [key : string]: number
    }
}

export const theme: ThemeType = {
    colors: {
        primary: '#2EE3AA',
        secondary: '#fefe3d',
        white: '#fff',
        bg: '#FCFCFC',
        firstPlane: '#fff',
        textPrimary: '#232323',
        textSecondary: '#fefe3d',
        darkPrimary:'#35B78E',
        lightPrimary:'#A5F1D9',
        placeholder:'#CCCCCC'
    },
    fontSizes: {
        micro: '10px',
        tiny: '12px',
        xsmall: '14px',
        small: '16px',
        default: '18px',
        big: '20px',
        large: '25px',
        xlarge: '34px'
    },
    fonts: {},
    fontWeight: {}
}

