import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#d962d1',
      main: '#3760db',
      dark: '#e33c36',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d962d1',
      main: '#3760db',
      dark: '#e33c36',
      contrastText: '#000',
    },
      openTitle: blueGrey['400'],
      protectedTitle: lightGreen['400'],
      type: 'light'
    }
  })

  export default theme