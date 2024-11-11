import React from 'react';
import ReactDOM from 'react-dom';

type RenderIndicatorProps = {
  style: React.CSSProperties;
  className?: string;
  parentDom?: HTMLElement;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
};

export const RenderIndicator = ({
  style,
  className,
  parentDom,
  x,
  y,
  w,
  h,
}: RenderIndicatorProps) => {
  const override = {};

  const indicator = (
    <div
      className={className}
      style={{
        position: 'fixed',
        display: 'block',
        opacity: 1,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'transparent',
        zIndex: 99999,
        ...style,
        ...override,
      }}
    ></div>
  );

  if (parentDom && parentDom.ownerDocument !== document) {
    return ReactDOM.createPortal(indicator, parentDom.ownerDocument.body);
  }

  return indicator;
};
