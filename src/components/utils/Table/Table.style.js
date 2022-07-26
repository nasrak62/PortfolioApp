import styled from "styled-components";
import { classObj } from "utils/styles/breakpoints";

const prefix = "Table";

export const classes = classObj(prefix, "container", "row", "column");

export const StyledTable = styled("table")(() => ({
  [`&.${classes.container}`]: {
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(#0c8ee5,#008b44)`,
    overflowY: "scroll",
    tableLayout: "fixed",
  },

  [`& .${classes.row}`]: {
    width: "100%",
  },

  [`& .${classes.column}`]: {
    width: `${100 / 8}%`,
    textAlign: "center",
  },
}));
