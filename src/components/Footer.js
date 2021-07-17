/* eslint-disable react/display-name */
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { memo } from "react";
const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    left: 0,
    bottom: "-70rem",
    right: 0,
    zIndex: -1,
    marginTop: "-200px",
    height: "5.938rem",
    display: "grid",
    borderTopLeftRadius: "230px 10px",
    borderTopRightRadius: "230px 10px",
    background:
      "radial-gradient(circle, rgba(45,44,45,1) 0%, rgba(9,9,121,1) 0%, rgba(0,0,0,1) 82%)",
  },
}));

export const Footer = memo(() => {
  const classes = useStyles();
  return <Toolbar className={classes.root}>Footer</Toolbar>;
});
