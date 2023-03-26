import { Canvas } from './Canvas';
import { GlobalStyle } from './GlobalStyle';

const container = document.getElementById('root');
if (!container) {
  throw new Error('container not found.');
}

new Canvas({ name: '' }).render(container, <GlobalStyle />);
