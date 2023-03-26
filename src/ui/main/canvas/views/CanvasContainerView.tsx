import { useEffect, useRef } from 'react';
import { createCanvas } from '@yong1000abc/design-tool-canvas';

export function CanvasContainerView({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      createCanvas({ name: '' }).render(containerRef.current);
    }
  }, []);
  return <div ref={containerRef} className={className}></div>;
}
