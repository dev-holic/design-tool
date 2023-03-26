import { Canvas, CanvasProps } from '@yong1000abc/design-tool-canvas';

export interface CanvasService {
  createCanvas(canvasProps: CanvasProps): Canvas;
}
