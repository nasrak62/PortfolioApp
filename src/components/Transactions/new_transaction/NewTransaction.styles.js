import styled from "styled-components";

const prefix = "NewTransaction";

export const classes = {
  container: `${prefix}-container`,
  inputContainer: `${prefix}-inputContainer`,
  item: `${prefix}-item`,
  button: `${prefix}-button`,
  inputLabel: `${prefix}-inputLabel`,
  title: `${prefix}-title`,
  select: `${prefix}-select`,
  selectOption: `${prefix}-selectOption`,
  errors: `${prefix}-errors`,
};

export const StyledNewTransactions = styled("div")({
  [`&.${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "center",
    justifyContent: "flex-start",
    rowGap: "5%",
    height: "100%",
    backgroundImage: `linear-gradient(#001e32,#802047)`,
  },

  [`& .${classes.inputContainer}`]: {
    display: "flex",
    flexDirection: "row",
    width: "25%",
    textAlign: "center",
    margin: 0,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
  },

  [`& .${classes.item}`]: {
    width: "50%",
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "transparent",
    borderRadius: 5,
    border: "3px solid #802047",
    padding: 2,
  },

  [`& .${classes.button}`]: {
    width: "25%",
    textAlign: "center",
    margin: 0,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 5,
    color: "#ffffff",
    backgroundColor: "#50bb50",
    border: "1px solid #50bb50",
    cursor: "pointer",
    paddingTop: 5,
    paddingBottom: 5,

    [`&:hover`]: {
      transform: "scale(1.2)",
      backgroundColor: "#50dd50",
    },
  },

  [`& .${classes.inputLabel}`]: {
    color: "#ffffff",
  },

  [`& .${classes.title}`]: {
    color: "#ffffff",
    marginTop: "1%",
  },

  [`& .${classes.select}`]: {
    width: "50%",
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "transparent",
    borderRadius: 5,
    border: "3px solid #802047",
    padding: 2,
  },

  [`& .${classes.selectOption}`]: {
    backgroundColor: "#802047",
    border: "1px solid #802047",
    borderRadius: 5,
    boxShadow: "none",
    width: "100%",
    height: "100%",
    padding: 5,
  },

  [`& .${classes.errors}`]: {
    fontSize: 20,
    color: "red",
  },
});
