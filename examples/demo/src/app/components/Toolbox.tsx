import { useEditor, Element } from '@craftjs/core';
import React from 'react';
import { Button as _Button } from 'antd';

import { Button } from './Button';
import { SubGrid } from './SubGrid';

export const Toolbox = () => {
  const { connectors, actions } = useEditor();

  return (
    <div>
      <_Button
        ref={(ref) =>
          connectors.create(ref, <Button />, {
            onCreate: (nodeTree, x, y, w, h) => {
              actions.setProp(nodeTree.rootNodeId, (props) => {
                props['top'] = Math.floor(y / 25) * 25;
                props['left'] = Math.floor(x / 25) * 25;
                props['width'] = w;
                props['height'] = h;
                props['ts'] = new Date().getTime();
              });
            },
          })
        }
      >
        Button
      </_Button>

      <_Button
        ref={(ref) =>
          connectors.create(ref, <SubGrid />, {
            onCreate: (nodeTree, x, y, w, h) => {
              actions.setProp(nodeTree.rootNodeId, (props) => {
                props['top'] = Math.floor(y / 25) * 25;
                props['left'] = Math.floor(x / 25) * 25;
                props['width'] = 200;
                props['height'] = 200;
                props['ts'] = new Date().getTime();
              });
            },
          })
        }
      >
        Grid
      </_Button>
    </div>
  );
};
