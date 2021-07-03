import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "../../api/axios";

import { AuthContext } from "../../contexts/AuthContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  inputError: {
    "& .MuiFormLabel-root": {
      color: "red",
    },
    "&.Mui-focused": {
      border: "1px solid red",
      // backgroundColor: "blue",
    },
  },
  //   borderColor: "red",
  // },
}));

const loginSchema = yup.object({
  username: yup.string().required().min(3),
  password: yup.string().required().min(3),
});

export default function LoginPage() {
  const classes = useStyles();
  const [processLogin, setProcessLogin] = useState(false);
  const { dispatch } = useContext(AuthContext);
  return (
    <Container maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={async (values, actions) => {
            // actions.preventDefault();
            setProcessLogin(true);
            const res = await axios.post("/auth/local", {
              identifier: values.username,
              password: values.password,
            });
            console.log(
              "🚀 ~ file: index.js ~ line 95 ~ onSubmit={ ~ res",
              res
            );

            dispatch({
              type: "SAVE_USER",
              payload: {
                token: res.data.jwt,
                name: res.data.data.user.username,
                email: res.data.data.user.email,
                id: res.data.data.user.id,
              },
            });
            console.log(res);
            setProcessLogin(false);
          }}
        >
          {(props) => (
            <div className={classes.form}>
              <TextField
                className={classes.inputError}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="error"
                value={props.values.username}
                onChange={props.handleChange("username")}
                onBlur={props.handleBlur("username")}
              />
              <Typography color="error">
                {props.touched.username && props.errors.username}
              </Typography>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={props.values.password}
                onChange={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
              />
              <Typography color="error">
                {props.touched.password && props.errors.password}
              </Typography>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={props.handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </div>
          )}
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
