import { createTheme } from '@material-ui/core/styles';
import {primaryColor, neutralColor, SecondaryColor} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    secondary: {
      main: SecondaryColor,
      contrastText: primaryColor,
    },
    text: {
        primary: neutralColor,
    }
  }
})

export default theme 