import { Editor, Frame, Element } from '@craftjs/core';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { SettingsPanel } from '../components/SettingsPanel';
import { Toolbox } from '../components/Toolbox';
import { Topbar } from '../components/Topbar';
import { Button } from '../components/user/Button';
import { Card, CardBottom, CardTop } from '../components/user/Card';
import { Container } from '../components/user/Container';
import { Text } from '../components/user/Text';
import { Log } from '../components/user/Log';
import { Container1 } from '../components/user/Container1';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: 'rgb(252, 253, 253)',
  },
}));
export default function App() {
  const classes = useStyles();

  return (
    <div style={{ margin: '0 auto', width: '800px' }}>
      <Typography style={{ margin: '20px 0' }} variant="h5" align="center">
        Basic Page Editor
      </Typography>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
          Container1,
        }}
      >
        <>
          <Log />
          <Frame>
            <Element
              canvas
              is={Container}
              padding={5}
              background="#eeeeee"
              data-cy="root-container"
            >
              <Element
                canvas
                is={Container1}
                padding={6}
                background="#999999"
                data-cy="frame-container"
              >
                <Text
                  size="small"
                  text="It's me again!"
                  data-cy="frame-container-text"
                />
              </Element>
              <Button text="Click me" size="small" data-cy="frame-button" />
            </Element>
          </Frame>
        </>
      </Editor>
    </div>
  );
}
