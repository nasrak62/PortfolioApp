export const getPunch = () => {
  const punches = ['punchMidR', 'punchMidL'];
  const choosePunch = Math.round(Math.random(0, 1));
  const punch = punches[choosePunch];

  return punch;
};
