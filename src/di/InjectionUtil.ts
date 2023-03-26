import { container } from 'tsyringe';
import { InjectionToken } from './InjectionToken';

export namespace InjectionUtil {
  export function inject<T>(token: InjectionToken): T {
    return container.resolve<T>(token);
  }
}
