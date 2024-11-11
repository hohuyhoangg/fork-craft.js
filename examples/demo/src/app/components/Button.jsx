import { useNode } from '@craftjs/core';

import React from 'react';
import { Button as _Button } from 'antd';

export const Button = ({ top, left, width, height }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <_Button
      ref={(ref) => connect(drag(ref))}
      type="primary"
      style={{
        // position: 'absolute',
        // top,
        // left,
        width,
        height,
      }}
    >
      Primary Button
    </_Button>
  );
};
