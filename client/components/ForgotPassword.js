import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Container,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { verifyOTP, errorMessage } from "./ForgotPassHelper";

const theme = createTheme();

function ForgotPassword(props) {
  const navigate = useNavigate();
  const user = props.user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    const OTP = Math.floor(1000 + Math.random() * 9000);

    if (/\S+@\S+\.\S+/.test(email)) {
      //check if user exists
      const user = axios.get(`api/users/${email}`);

      if ((await user).data === "") {
        errorMessage("Your email is not in our system");
      } else {
        axios
          .post(`api/emailRecovery/send_recovery_email`, {
            email,
            OTP,
          })
          .then(verifyOTP(email, OTP));
      }
    } else {
      errorMessage("email");
    }
  };

  return user.firstName ? (
    navigate("/")
  ) : (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LockIcon style={{ fontSize: 100 }} sx={{ m: 2 }}></LockIcon>
          <p>
            We can help you reset your password and security info. First, enter
            your account email and follow the instructions.
          </p>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography component="h6" variant="h6"></Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Recover Account
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="/signIn"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Cancel
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/signup"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ForgotPassword;
