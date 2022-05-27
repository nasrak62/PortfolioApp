import { useState, useCallback } from "react";
import LoginForm from "components/login/LoginForm/LoginForm";
import { StyledRegister, classes } from "./Register.style";
import { register, initialState, inputTypes } from "./utils/register";
import { objectHasEmpty, objectSetEmptyErrors } from "utils/objects";
import { useNavigate } from "react-router-dom";

import { observer } from "mobx-react-lite";
import useStore from "hooks/useStore";

const Register = observer(() => {
  const COMPONENT_NAME = "Register";
  const store = useStore();
  let navigate = useNavigate();

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState("");

  const handleClick = useCallback(async () => {
    if (objectHasEmpty(user)) {
      return objectSetEmptyErrors(user, setErrors);
    }

    const token = await register(user, setErrors);

    if (token) {
      store?.login(token);
      return navigate("/");
    }

    return setErrors("Register error");
  }, [user, store, navigate]);

  return (
    <StyledRegister className={classes.container}>
      <LoginForm
        inputTypes={inputTypes}
        user={user}
        setUser={setUser}
        buttonText={COMPONENT_NAME}
        errors={errors}
        handleClick={handleClick}
      />
    </StyledRegister>
  );
});

export default Register;
