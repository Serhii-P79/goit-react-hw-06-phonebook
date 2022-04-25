import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { App } from 'сomponents';
import { theme } from 'constants';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
