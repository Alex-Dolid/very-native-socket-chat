// Core
import React, { FC, FormEventHandler, ReactElement, useState } from "react";
// Components
import { TextField, Grid, Button } from "@material-ui/core";
// Hooks
import { useAuth } from "bus/chat";
// Styles
import "./SignInForm.scss";

const SignInForm: FC = (): ReactElement => {
  const { auth } = useAuth();
  const [nickname, setNickname] = useState("");
  const [required, setRequired] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    if (nickname) {
      auth(nickname);
    } else {
      setRequired(true);
    }
  };

  return (
    <Grid container justify="center" alignItems="center" style={{ height: "100%" }}>
      <Grid item xs={8} md={4} xl={2}>
        <form className="sign-in-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="nickname" className="sign-in-form__label">What`s your nickname?</label>
          <TextField
            autoFocus
            id="nickname"
            color="secondary"
            className="sign-in-form__text-field"
            error={!nickname && required}
            helperText={!nickname && required ? "This field is required" : null}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Button type="submit" variant="outlined" color="secondary" className="sign-in-form__btn">Join</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
