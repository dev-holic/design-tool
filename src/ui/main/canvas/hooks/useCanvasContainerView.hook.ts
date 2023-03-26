import { useEffect, useRef } from 'react';
import { CanvasService } from '@business/canvas/services/CanvasService';
import { InjectionUtil } from '@di/InjectionUtil';

const canvasService = InjectionUtil.inject<CanvasService>('CanvasService');

export function useCanvasContainerView() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      canvasService.createCanvas({ name: '' }).render(containerRef.current);
    }
  }, []);

  return { containerRef };
}
