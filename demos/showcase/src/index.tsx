import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import * as PXBThemes from '@pxblue/react-themes';
import '@pxblue/react-themes/open-sans';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={createMuiTheme(PXBThemes.blue)}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
