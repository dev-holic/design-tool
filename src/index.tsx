import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './GlobalStyle';
import { RootView } from './ui/views/RootView';

const container = document.getElementById('root');
if (!container) {
  throw new Error('container not found.');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <GlobalStyle />
    <RootView />
  </StrictMode>
);
