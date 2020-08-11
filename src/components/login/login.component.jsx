import React from "react";
import { useHistory } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";

import "./login.styles.scss";
import Finance from "../../assets/finance.svg";
import Avatar from "../../assets/avatar.svg";
import Wave from "../../assets/wave.png";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function Logon() {
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    history.push("/dashboard");
  }

  return (
    <div className="logon-container">
      <img className="wave" src={Wave} alt="" />
      <div className="container">
        <div className="img">
          <img src={Finance} alt="" />
        </div>
        <div className="login-content">
          <form onSubmit={handleLogin}>
            <img src={Avatar} alt="" />
            <h2 className="title">Login</h2>

            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div>
              <ThemeProvider theme={theme}>
                <TextField
                  label="Email"
                  className="input"
                  variant="standard"
                  fullWidth
                />
              </ThemeProvider>
              <div>
                <br />
              </div>
              <ThemeProvider theme={theme}>
                <TextField
                  label="Senha"
                  className="input"
                  variant="standard"
                  fullWidth
                  type="password"
                />
              </ThemeProvider>
            </div>
            <br />
            <div>
              <a href="/">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              ENTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
