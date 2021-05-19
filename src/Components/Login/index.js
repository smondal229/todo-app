import { Box, TextField } from "@material-ui/core";
import { useState } from "react";
import { login } from "../../api/auth";
import {
  emailValidator,
  validatePassword
} from "../../helpers/customValidator";
import CutsomButton from "../common/CustomButton";
import PasswordField from "../common/PasswordField";
import useStyles from "./styles";

export const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    let error = false;

    if (!emailValidator(email)) {
      error = true;
      setErrors({ ...errors, email: "Email is not valid" });
    }

    if (validatePassword(password) !== true) {
      error = true;
      setErrors({ ...errors, password: validatePassword(password) });
    }

    if (error) return;

    setLoading(true);
    login({ email, password })
      .then((data) => {
        localStorage.setItem("accessToken", data.results.token);
        setLoggedIn(true);
      })
      .catch((error) => {
        alert(
          error?.message ? error?.message?.toString() : "Something went wrong"
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box m='auto' maxWidth={480}>
      <form onSubmit={onSubmit}>
        <TextField
          variant='outlined'
          fullWidth
          label='Email'
          value={email}
          type='email'
          onChange={({ target: { value } }) => {
            if (errors.email) setErrors({ ...errors, email: null });
            setEmail(value);
          }}
          error={errors.email}
          helperText={errors.email}
          className={classes.inputFields}
        />

        <PasswordField
          name='password'
          password={password}
          setPassword={({ target: { value } }) => {
            if (errors.password) setErrors({ ...errors, password: null });
            setPassword(value);
          }}
          setErrors={setErrors}
          error={errors.password}
        />

        <CutsomButton
          loading={loading}
          type='submit'
          wrapperStyle={{ margin: "auto" }}
        >
          Login
        </CutsomButton>
      </form>
    </Box>
  );
};
