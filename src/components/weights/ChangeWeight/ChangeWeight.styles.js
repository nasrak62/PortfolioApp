import styled from "styled-components";
import { classObj } from "utils/styles/breakpoints";

const prefix = "ChangeWeight";

export const classes = classObj(
  prefix,
  "container",
  "header",
  "titleContainer",
  "title",
  "errors",
  "done"
);

export const StyledChangeWeight = styled("div")({
  [`&.${classes.container}`]: {
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(#0c8ee5,#008b44)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2%",
  },

  [`& .${classes.titleContainer}`]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  [`& .${classes.title}`]: {
    margin: "2% 0",
  },

  [`& .${classes.errors}`]: {
    margin: "2% 0",
    color: "red",
    textAlign: "center",
  },

  [`& .${classes.done}`]: {
    margin: "2% 0",
    color: "green",
    textAlign: "center",
  },
});
