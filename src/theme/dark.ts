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
        primary: '#134423',
        secondary: '#D0D0D0',
        white: '#fff',
        bg: '#111',
        firstPlane: '#333',
        textPrimary: '#eee',
        textSecondary: '#fefe3d'
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

