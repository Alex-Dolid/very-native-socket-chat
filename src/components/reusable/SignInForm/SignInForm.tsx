// Core
import React, { FC, FormEventHandler, ReactElement, useState } from "react";
// Components
import { TextField, Grid, Button } from "@material-ui/core";
// Routing
import { useHistory } from "react-router";
// Styles
import "./SignInForm.scss";

const SignInForm: FC = (): ReactElement => {
  const history = useHistory();
  const [nickname, setNickname] = useState("");
  const [required, setRequired] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    if (nickname) {
      console.log(nickname);
      history.push("/chat");
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
            helperText="This field is required"
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
