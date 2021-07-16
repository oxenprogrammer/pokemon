import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { memo } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#ffffff",
    height: "5.938rem",
    display: "grid",
    gridTemplateColumns: "auto 40% auto",
  },
}));

// eslint-disable-next-line react/display-name
const Header = memo(() => {
  const classes = useStyles();
  return (
    <Router>
      <main>
        <AppBar position="sticky">
          <Toolbar className={classes.root} variant="dense">
            <Typography variant="h6" color="inherit">
              <Link className={classes.bookStoreCMS} href="#">
                Pokemon
              </Link>
            </Typography>
            <Typography>
              <Link className={classes.link} href="/">
                Home
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={App} />
        </Switch>
      </main>
    </Router>
  );
});

export default Header;
