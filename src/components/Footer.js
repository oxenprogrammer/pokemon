/* eslint-disable react/display-name */
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { memo } from "react";

const useStyles = makeStyles(() => ({
  root: {
    bottom: 0,
    height: "4.938rem",
    width: "90%",
    color: "#ffffff",
    textAlign: "center",
    padding: "1rem",
    display: "grid",
    borderBottomLeftRadius: "230px 10px",
    borderBottomRightRadius: "230px 10px",
    background:
      "radial-gradient(circle, rgba(45,44,45,1) 0%, rgba(9,9,121,1) 0%, rgba(0,0,0,1) 82%)",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.4rem",
  },
}));

export const Footer = memo(() => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      All rights reserved{" "}
      <a className={classes.link} href="www.emanuel-okello.me" target="_blank">
        emanuel okello
      </a>{" "}
      2021
    </Toolbar>
  );
});
