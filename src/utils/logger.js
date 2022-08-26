const mode = process.env.MODE || 'production';

export const logger = (msg) => {
  if (mode !== 'production') {
    console.log(msg);
  }
};
