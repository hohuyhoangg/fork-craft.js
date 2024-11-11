import { useEditor } from '@craftjs/core';
import { Button } from 'antd';
import React from 'react';

export const Log = () => {
  const { state } = useEditor((state) => ({
    state,
  }));

  return (
    <Button
      onClick={() => {
        console.log('🚀 ~ Log ~ state:', state);
      }}
      title="LOG"
    >
      Log
    </Button>
  );
};
