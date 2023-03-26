import { useCanvasContainerView } from '@ui/main/canvas/hooks/useCanvasContainerView.hook';

export const CanvasContainerView = (props: { className?: string }) => {
  return ((hookReturns) => (
    <div ref={hookReturns.containerRef} className={props.className}></div>
  ))(useCanvasContainerView());
};
