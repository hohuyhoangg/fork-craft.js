import { useNode } from '@craftjs/core';
import { Slider } from '@material-ui/core';
import { Paper, FormControl, FormLabel } from '@material-ui/core';
import React from 'react';

export const Container = ({ background, padding, children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      {...props}
      className="container"
      ref={(ref) => connect(drag(ref))}
      style={{
        background,
        width: '100%',
        height: '400px',
        position: 'relative',
      }}
    >
      {children}
    </Paper>
  );
};

export const ContainerSettings = () => {
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

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
