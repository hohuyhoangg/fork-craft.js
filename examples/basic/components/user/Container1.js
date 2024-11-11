import { useNode } from '@craftjs/core';
import { Slider } from '@material-ui/core';
import { Paper, FormControl, FormLabel } from '@material-ui/core';
import React from 'react';

export const Container1 = ({
  background,
  padding,
  children,
  top = 150,
  left = 150,
  width = '200px',
  height = '200px',
  ...props
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{
        background,
        position: 'absolute',
        top,
        left,
        width,
        height,
      }}
    >
      {children}
    </Paper>
  );
};

export const Container1Settings = () => {
  const {
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) =>
            setProp((props) => (props.padding = value), 500)
          }
        />
      </FormControl>
    </div>
  );
};

export const ContainerDefaultProps = {
  background: '#ffffff',
  padding: 3,
};

Container1.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: Container1Settings,
  },
};
