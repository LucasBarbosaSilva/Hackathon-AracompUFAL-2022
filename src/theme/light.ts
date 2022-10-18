interface ThemeType {
    colors: { [key: string]: string }
    fontSizes: { [key: string]: string }
    fonts: { [key: string]: string }
    fontWeight: { [key: string]: number }
  }

export const theme:ThemeType = {
    colors: {primary: '#268d2c', secondary:'#fefe3d', white:'#fff', bg:'#D0D0D0 '},
    fontSizes:{},
    fonts: {},
    fontWeight:{}
}