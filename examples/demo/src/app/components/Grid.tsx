import { Element } from '@craftjs/core';
import React from 'react';

export const Grid = ({ children = <></> }) => {
  console.log('🚀 ~ CustomGrid ~ children:', children);
  return (
    <Element
      is="div"
      id="global-grid"
      canvas
      style={{
        position: 'relative',
        backgroundColor: 'lightgoldenrodyellow',
        width: '100%',
        height: '400px',
      }}
    >
      {children}
    </Element>
  );
};
