import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import App from 'components/App';
// import './index.css';

import { theme } from 'constants';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyles';

import { persistor, store} from './redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);

