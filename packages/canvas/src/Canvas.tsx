import { ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CanvasView } from './ui/views/CanvasView';

export type CanvasProps = {
  name: string;
};

export class Canvas implements Canvas {
  constructor(private readonly props: CanvasProps) {}

  render(container: HTMLElement, children?: ReactNode) {
    const root = createRoot(container);

    root.render(
      <StrictMode>
        {children}
        <CanvasView />
      </StrictMode>
    );
  }
}
