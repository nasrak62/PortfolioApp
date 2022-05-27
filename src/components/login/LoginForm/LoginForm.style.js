import styled from "styled-components";

const prefix = "LoginForm";

export const classes = {
  subContainer: `${prefix}-subContainer`,
  inputContainer: `${prefix}-inputContainer`,
  formContainer: `${prefix}-formContainer`,
  title: `${prefix}-title`,
  errors: `${prefix}-errors`,
  buttonContainer: `${prefix}-buttonContainer`,
  button: `${prefix}-button`,
  label: `${prefix}-label`,
  input: `${prefix}-input`,
};
export const StyledLoginForm = styled("div")({
  [`&.${classes.subContainer}`]: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#ffffff",
  },

  [`& .${classes.inputContainer}`]: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "3%",
  },

  [`& .${classes.formContainer}`]: {
    width: "80%",
    margin: "auto",
  },

  [`& .${classes.title}`]: {
    margin: "auto",
    marginTop: "4%",
    marginBottom: "4%",
  },

  [`& .${classes.errors}`]: {
    margin: "auto",
    marginTop: "4%",
    marginBottom: "4%",
    fontSize: 16,
    color: "red",
  },

  [`& .${classes.buttonContainer}`]: {
    margin: "auto",
    marginTop: "4%",
    marginBottom: "4%",
    width: "100%",
  },

  [`& .${classes.button}`]: {
    padding: "3%",
    paddingLeft: "6%",
    paddingRight: "6%",
    borderRadius: 5,
    fontSize: 16,
    boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.5)",
    border: "1px solid transparent",
    backgroundColor: "rgba(180,60,150,0.5)",
    color: "#ffffff",

    [`&:hover`]: {
      backgroundColor: "rgba(180,60,150,1)",
      transform: "scale(1.1)",
    },
  },

  [`& .${classes.label}`]: {
    fontSize: 16,
  },

  [`& .${classes.input}`]: {
    width: "60%",
    padding: "2%",
    color: "#ffffff",
    backgroundColor: "rgba(120,20,80,0.5)",
    fontSize: 16,
  },
});
