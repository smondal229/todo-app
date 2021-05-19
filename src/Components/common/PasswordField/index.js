import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";

const PasswordField = ({
  errors,
  setErrors,
  setPassword,
  password,
  label = "Password",
  ...props
}) => {
  const [passwordVisible, setVisible] = useState(false);
  const { name } = props;
  const isError = Boolean(errors && errors[name]);

  return (
    <FormControl style={{ marginTop: 10, marginBottom: 12, width: "100%" }}>
      <InputLabel
        htmlFor='standard-adornment-password'
        style={{ marginLeft: 15, marginTop: -3 }}
        error={isError}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id='standard-adornment-password'
        fullWidth
        error={isError}
        variant='outlined'
        type={passwordVisible ? "text" : "password"}
        value={password}
        onChange={setPassword}
        label={label}
        inputProps={{
          minLength: 8
        }}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={() => setVisible(!passwordVisible)}
            >
              {passwordVisible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        {...props}
      />
      <FormHelperText error={isError}>{errors && errors[name]}</FormHelperText>
    </FormControl>
  );
};

export default PasswordField;
