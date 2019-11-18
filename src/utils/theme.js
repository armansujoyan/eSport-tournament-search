import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    primary: teal
  }
});

theme = responsiveFontSizes(theme);

export default theme;