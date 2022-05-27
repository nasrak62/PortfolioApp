import styled from "styled-components";

const prefix = "Login";

export const classes = {
  container: `${prefix}-container`,
};

export const StyledLogin = styled("div")({
  [`&.${classes.container}`]: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundImage: `linear-gradient(#001e32,#802047)`,
  },
});
