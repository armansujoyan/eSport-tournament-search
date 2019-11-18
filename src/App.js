import React from 'react';
import { Provider } from 'react-redux';
import getStore from './redux/store';
import Root from './components/Root';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme'

const store = getStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root></Root>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
