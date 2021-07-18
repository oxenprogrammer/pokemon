import { Link, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React, { Fragment, memo } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import App from "./App";
import { Footer } from "./Footer";
import { Pokemon } from "../containers/Pokemon";
import logo from "../assets/img/logo3.png";

const useStyles = makeStyles(() => ({
  main: {
    display: "grid",
  },
  root: {
    height: "5.938rem",
    display: "grid",
    borderBottomLeftRadius: "230px 10px",
    borderBottomRightRadius: "230px 10px",
    background:
      "radial-gradient(circle, rgba(45,44,45,1) 0%, rgba(9,9,121,1) 0%, rgba(0,0,0,1) 82%)",
  },
  topToolbar: {
    height: "2rem",
    backgroundColor: "#329B99",
  },
  logo: {
    width: "10%",
    zIndex: 2,
    position: "absolute",
    top: "-2rem",
    left: "1rem",
    "@media(min-width: 1300px)": {
      width: "8%",
    },
    "@media(max-width: 900px)": {
      width: "15%",
    },
    "@media(max-width: 480px)": {
      width: "20%",
    },
  },
  link: {
    display: "flex",
    justifyContent: "flex-end",
    color: "#FED823",
    fontWeight: "bolder",
    fontSize: "2rem",
  },
}));

// eslint-disable-next-line react/display-name
const Header = memo(() => {
  const classes = useStyles();
  return (
    <Router>
      <main className={classes.main}>
        <nav className={classes.topToolbar}></nav>

        <Toolbar className={classes.root}>
          <Fragment>
            <img className={classes.logo} src={logo} alt={"logo"} />
          </Fragment>
          <Typography>
            <Link className={classes.link} href="/">
              Pokemon
            </Link>
          </Typography>
        </Toolbar>

        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/pokemon/:name" exact component={Pokemon} />
          <Redirect to={"/"} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
});

export default Header;
