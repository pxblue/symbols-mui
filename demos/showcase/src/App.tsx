import React from 'react';
import * as Symbols from '@pxblue/symbols-mui';

export const App = () => {
  return (
    <div>
      {Object.keys(Symbols).map((key: any) => {
        //@ts-ignore
        const Component = Symbols[key];
        return <Component />
      })}
    </div>
  );
}