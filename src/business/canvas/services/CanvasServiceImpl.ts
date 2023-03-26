import {
  Canvas,
  CanvasProps,
  createCanvas,
} from '@yong1000abc/design-tool-canvas';
import { CanvasService } from './CanvasService';

export class CanvasServiceImpl implements CanvasService {
  private canvas?: Canvas;

  createCanvas(canvasProps: CanvasProps): Canvas {
    return (this.canvas = createCanvas(canvasProps));
  }
}
