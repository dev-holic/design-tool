import 'reflect-metadata'; // tsyringe
import { container } from 'tsyringe';
import { DIMap } from './DIMap';

Object.entries(DIMap).forEach(([token, provider]) => {
  container.register(token, provider as any);
});
