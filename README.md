# PX Blue Icons for Material-UI
This library contains componentized svg icons from [@pxblue/icons](https://github.com/pxblue/icons) for use in React applications using Material UI. The icons are made available in the same way that Material UI exposes the [Material Icons](https://material-ui.com/style/icons/#svg-material-icons). 

## Installation
To install the PX Blue mui icons from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
npm install --save @pxblue/icons-mui
or
yarn add @pxblue/icons-mui
```

## Usage

### Angular
This package is intended for use only in React applications. For a way to link svg icons for use in Angular applications, see [@pxblue/svg-mat-icon](https://github.com/pxblue/svg-mat-icon).


### React
Once you have installed the npm module, you can import the icon components into your application as follows:
```
import myIcon from '@pxblue/icons-mui/MyIcon;
...
<myIcon></myIcon>
```
If you are importing multiple icons, you can save some space by using named imports from the package root:
```
import {FirstIcon, SecondIcon, ThirdIcon} from '@pxblue/icons-mui';
```

Icon names are in TitleCase - for a list of available icons, refer to [@pxblue/icons](https://github.com/pxblue/icons/blob/master/README.md).

## Building Icon Set (for contributors)
To build the icon set, e.g. when new icons are added:

```
yarn install
yarn run svgr:react
```
or
```
yarn install
yarn run mui:react
```