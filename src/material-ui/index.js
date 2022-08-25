import loadable from 'utils/loadable';
export { styled } from '@mui/material/styles';

export const Checkbox = loadable(() =>
  import(/* webpackChunkName: "Checkbox" */ '@mui/material/Checkbox'),
);
export const Button = loadable(() =>
  import(/* webpackChunkName: "Button" */ '@mui/material/Button'),
);

export const FormControlLabel = loadable(() =>
  import(
    /* webpackChunkName: "FormControlLabel" */ '@mui/material/FormControlLabel'
  ),
);

export const Paper = loadable(() =>
  import(/* webpackChunkName: "Paper" */ '@mui/material/Paper'),
);

export const AppBar = loadable(() =>
  import(/* webpackChunkName: "AppBar" */ '@mui/material/AppBar'),
);

export const Menu = loadable(() =>
  import(/* webpackChunkName: "Menu" */ '@mui/material/Menu'),
);

export const MenuItem = loadable(() =>
  import(/* webpackChunkName: "MenuItem" */ '@mui/material/MenuItem'),
);

export const CardContent = loadable(() =>
  import(/* webpackChunkName: "CardContent" */ '@mui/material/CardContent'),
);

export const CardActions = loadable(() =>
  import(/* webpackChunkName: "CardActions" */ '@mui/material/CardActions'),
);

export const Card = loadable(() =>
  import(/* webpackChunkName: "Card" */ '@mui/material/Card'),
);
