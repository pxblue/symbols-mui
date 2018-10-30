# PX Blue Symbols for Material-UI
This library contains componentized svg symbols from [@pxblue/symbols](https://github.com/pxblue/symbols) for use in React applications using Material UI. The symbols are made available in the same way that Material UI exposes the [Material Icons](https://material-ui.com/style/icons/#svg-material-icons). 

## Installation
To install the PX Blue mui symbols from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
npm install --save @pxblue/symbols-mui
or
yarn add @pxblue/symbols-mui
```

>**NOTE (Peer Dependencies):** Using this package requires you to have @material-ui/core and @material-ui/icons defined as dependencies in your project's package.json file.


## Usage

### Angular
This package is intended for use only in React applications. For a way to link svg symbols for use in Angular applications, see [@pxblue/symbols](https://github.com/pxblue/symbols).


### React
Once you have installed the npm module, you can import the symbol components into your application as follows:
```
import mySymbol from '@pxblue/symbols-mui/MySymbol;
...
<mySymbol></mySymbol>
```
If you are importing multiple symbols, you can save some space by using named imports from the package root:
```
import {FirstSymbol, SecondSymbol, ThirdSymbol} from '@pxblue/symbols-mui';
```

Symbol names are in TitleCase - for a list of available symbols, refer to [@pxblue/symbols](https://github.com/pxblue/symbols/blob/master/README.md) or look at our live [demo](http://www.stackblitz.com/px-blue/pxb-symbols-react).

## Building Symbol Set (for contributors)
To build the symbols set, e.g. when new symbols are added:

```
yarn install
yarn run svgr
```
or
```
yarn install
yarn run mui
```