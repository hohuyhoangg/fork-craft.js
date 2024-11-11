import { useEditor } from '@craftjs/core';
import React from 'react';

export const Log = () => {
  const { state } = useEditor((state) => ({
    state,
  }));

  return (
    <button
      onClick={() => {
        console.log('🚀 ~ Log ~ state:', state);
      }}
      title="LOG"
    >
      Log
    </button>
  );
};
