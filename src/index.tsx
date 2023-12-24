import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <BrowserRouter basename={'/online-store'}>
      <App />
    </BrowserRouter>
  </StoreProvider>,
);
