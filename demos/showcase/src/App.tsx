import React from 'react';
import * as Symbols from '@pxblue/symbols-mui';

export const App = (): JSX.Element => (
    <div>
        {Object.keys(Symbols).map((key: any) => {
            //@ts-ignore
            const Component = Symbols[key];
            return <Component key={key} />;
        })}
    </div>
);
