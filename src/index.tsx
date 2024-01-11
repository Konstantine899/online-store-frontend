import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={'/online-store'}>
    <ErrorBoundary>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
