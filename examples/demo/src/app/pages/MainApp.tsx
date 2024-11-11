import { Editor, Frame, NodeElement } from '@craftjs/core';
import React, { Fragment } from 'react';

import { Button } from '../components/Button';
import { Toolbox } from '../components/Toolbox';
import { SubGrid } from '../components/SubGrid';
import { Grid } from '../components/Grid';
import { Log } from '../components/Log';

export default function MainApp() {
  return (
    <div style={{ margin: '0 auto', width: '100%' }}>
      <Editor
        resolver={{
          Button,
          Toolbox,
          SubGrid,
          Grid,
          Fragment,
          NodeElement,
        }}
      >
        <Frame>
          <Grid>
            <SubGrid top={100} left={50} width={200} height={200} />
          </Grid>
        </Frame>
        <Toolbox />
        <Log />
      </Editor>
    </div>
  );
}
