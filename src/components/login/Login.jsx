import { useState, useCallback } from 'react';
import { StyledLogin, classes } from './Login.style';
import LoginForm from './LoginForm/LoginForm';
import { objectHasEmpty, objectSetEmptyErrors } from 'utils/objects';
import { initialState, login, inputTypes } from './utils/login';
import { useNavigate } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import useStore from 'hooks/useStore';

const Login = observer(() => {
  const COMPONENT_NAME = 'Login';
  const store = useStore();
  let navigate = useNavigate();

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState('');

  const handleClick = useCallback(async () => {
    if (objectHasEmpty(user)) {
      return objectSetEmptyErrors(user, setErrors);
    }

    const token = await login(user, setErrors);

    if (token) {
      store?.login(token);
      return navigate('/');
    }

    return setErrors('Login error');
  }, [user, store, navigate]);

  return (
    <StyledLogin className={classes.container}>
      <LoginForm
        inputTypes={inputTypes}
        user={user}
        setUser={setUser}
        buttonText={COMPONENT_NAME}
        errors={errors}
        handleClick={handleClick}
      />
    </StyledLogin>
  );
});

export default Login;
