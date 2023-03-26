import { useEffect, useRef } from 'react';
import { Canvas } from '@design-tool/canvas';

export function CanvasContainerView({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      new Canvas({ name: '' }).render(containerRef.current);
    }
  }, []);
  return <div ref={containerRef} className={className}></div>;
}
