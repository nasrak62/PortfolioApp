import loadable from 'utils/loadable';

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
