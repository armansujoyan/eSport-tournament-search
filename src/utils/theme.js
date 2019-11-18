import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

let theme = createMuiTheme({
  palette: {
    primary: indigo
  }
});

theme = responsiveFontSizes(theme);

export default theme;