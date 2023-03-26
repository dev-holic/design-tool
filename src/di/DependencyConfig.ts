import 'reflect-metadata'; // tsyringe
import { container } from 'tsyringe';
import { DependencyMap } from './DependencyMap';

Object.entries(DependencyMap).forEach(([token, provider]) => {
  container.register(token, provider as any);
});
