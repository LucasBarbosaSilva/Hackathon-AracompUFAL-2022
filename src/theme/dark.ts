interface ThemeType {
    colors: { [key: string]: string }
    fontSizes: { [key: string]: string }
    fonts: { [key: string]: string }
    fontWeight: { [key: string]: number }
  }

export const theme:ThemeType = {
    colors: {primary: '#268d2c', secondary:'#fefe3d', white:'#fff', bg:'#D0D0D0', firstPlane:'#fff', textPrimary: '#333', textSecondary:'#fefe3d'},
    fontSizes:{primary:'#134423', secondary:'#D0D0D0' , white:'#fff', bg:'#111', firstPlane: '#333', textPrimary: '#eee', textSecondary:'#fefe3d'},
    fonts: {},
    fontWeight:{}
}