import ReactDOM from 'react-dom/client';
import App from './app/app';
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './themes/defaultTheme';
import { Provider } from 'react-redux';
import store from './store/store/store';
import GlobalStyles from './themes/globalStyles';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import browserHistory from './history/browserHistory';
import HistoryRouter from './history/historyRouter';
import { checkAuthAction, fetchOffers } from './store/api-actions/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode >
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <HistoryRouter history={browserHistory}>
          <GlobalStyles />
          <ScrollToTop />
          <App />
        </HistoryRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode >
);
