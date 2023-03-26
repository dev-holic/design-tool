import { Provider } from 'tsyringe';
import { CanvasServiceImpl } from '@business/canvas/services/CanvasServiceImpl';
import { InjectionToken } from '@di/InjectionToken';

export const DependencyMap: Record<InjectionToken, Provider> = {
  CanvasService: { useValue: new CanvasServiceImpl() },
};
