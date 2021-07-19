import { Link, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React, { Fragment, memo } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import App from "./App";
import { Home } from "./Home";
import { Pokemon } from "../containers/Pokemon";
import logo from "../assets/img/logo.gif";

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    minHeight: "100vh",
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
    fontWeight: "bolder",
  },
  linkItems: {
    padding: "1rem",
    fontSize: "1.6rem",
    color: "#FED823",
    "&:hover": {
      fontSize: "1.62rem",
      textDecoration: "none",
      color: "#ffff00",
    },
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
          <Typography className={classes.link}>
            <Link className={classes.linkItems} href="/pokemons">
              Pokemons
            </Link>
            <Link className={classes.linkItems} href="/">
              Home
            </Link>
          </Typography>
        </Toolbar>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemons" exact component={App} />
          <Route path="/pokemon/:name" exact component={Pokemon} />
          <Redirect to={"/"} />
        </Switch>
      </main>
    </Router>
  );
});

export default Header;
