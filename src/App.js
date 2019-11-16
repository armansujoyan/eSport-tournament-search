import React from 'react';
import { Provider } from 'react-redux';
import getStore from './redux/store';
import Root from './components/Root';

const store = getStore();

function App() {
  return (
    <Provider store={store}>
      <Root></Root>
    </Provider>
  );
}

export default App;
