import { Element, useNode } from '@craftjs/core';
import React from 'react';

export const SubGrid = ({ children = <></>, top, left, width, height }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Element
      ref={(ref) => connect(drag(ref))}
      is="div"
      id="sub-grid"
      canvas
      style={{
        // position: 'absolute',
        // top,
        // left,
        width,
        height,
        backgroundColor: 'red',
      }}
    >
      {children}
    </Element>
  );
};
