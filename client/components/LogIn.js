import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { errorMessage } from "./ForgotPassHelper";
import axios from "axios";

const theme = createTheme();

function LogIn(props) {
  const navigate = useNavigate();
  const user = props.user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };

    axios
      .post(`/api/auth/login`, { email: user.email, password: user.password })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log("there was an error", error);
        errorMessage("Wrong Email/Password");
      });
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
          <AccountBoxIcon
            style={{ fontSize: 100, color: "purple" }}
            sx={{ m: 3 }}
          ></AccountBoxIcon>
          <Typography component="h1" variant="h5">
            SIGN IN
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="/forgotPassword"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Forgot password?
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

export default LogIn;
