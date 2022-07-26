import { useCallback, useMemo } from 'react';
import Input from 'components/utils/Input';
import ShowWhen from 'components/utils/ShowWhen';
import { capitalize } from 'utils/strings';
import { StyledLoginForm, classes as basicClass } from './LoginForm.style';

const LoginForm = ({
  user,
  setUser,
  inputTypes,
  errors,
  buttonText,
  outClasses = null,
  handleClick,
}) => {
  const classes = outClasses || basicClass;

  const handleChange = useCallback(
    (e, attr) => {
      const newValue = e?.target?.value;

      setUser((prevState) => {
        return { ...prevState, [attr]: newValue };
      });
    },
    [setUser],
  );

  const inputs = useMemo(() => {
    return inputTypes.map((attr) => {
      return (
        <div
          className={classes.inputContainer}
          key={`${buttonText}-div-${capitalize(attr)}`}
        >
          <p
            className={classes.label}
            key={`${buttonText}-p-${capitalize(attr)}`}
          >{`${capitalize(attr)}:`}</p>
          <Input
            classes={classes.input}
            attr={attr}
            type={attr}
            value={user?.[attr]}
            onChange={handleChange}
            keyProp={`${buttonText}-input-${capitalize(attr)}`}
            key={`${buttonText}-Input-${capitalize(attr)}`}
          />
        </div>
      );
    });
  }, [classes, handleChange, inputTypes, user, buttonText]);

  return (
    <StyledLoginForm className={classes.subContainer}>
      <h1 className={classes.title}>{buttonText}</h1>
      <div className={classes.formContainer}>
        {inputs}

        <div className={classes.buttonContainer}>
          <button className={classes.button} onClick={handleClick}>
            {buttonText}
          </button>
        </div>

        <ShowWhen condition={Boolean(errors)}>
          <p className={classes.errors}>{errors}</p>
        </ShowWhen>
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
