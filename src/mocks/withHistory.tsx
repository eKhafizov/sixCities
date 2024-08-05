import HistoryRouter from '../history-route';
import { MemoryHistory, createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';


export function withHistory(component: JSX.Element, history?: MemoryHistory) {
  const memoryHistory = history ?? createMemoryHistory();
  return (
    <HistoryRouter history={memoryHistory} >
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
}

