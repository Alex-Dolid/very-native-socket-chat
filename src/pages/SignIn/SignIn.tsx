// Core
import React, { FC, ReactElement } from "react";
// Components
import { Box } from "@material-ui/core";
import { SignInForm } from "components/reusable";
// Styles
import "./SignIn.scss";

const SignIn: FC = (): ReactElement => (
  <Box component="section" color="white" className="page page_sign-in">
    <SignInForm />
  </Box>
);

export default SignIn;
