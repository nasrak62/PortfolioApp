import loadable from '@loadable/component';

export const Checkbox = loadable(() => import('@mui/material/Checkbox'));
export const Button = loadable(() => import('@mui/material/Button'));

export const FormControlLabel = loadable(() =>
  import('@mui/material/FormControlLabel'),
);

export const Paper = loadable(() => import('@mui/material/Paper'));
