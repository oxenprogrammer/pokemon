/* eslint-disable react/display-name */
import { makeStyles } from "@material-ui/core";
import { memo } from "react";
const useStyles = makeStyles(() => ({
  loader: {
    display: "inline-block",
    position: "relative",
    width: 80,
    height: 80,
    transform: "rotate(45deg)",
    transformOrigin: "40px 40px",
    div: {
      top: 32,
      left: 32,
      position: "absolute",
      width: 32,
      height: 32,
      background: "#000000",
      animation: "heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
    "div:after, div:before": {
      content: " ",
      position: "absolute",
      display: "block",
      width: 32,
      height: 32,
      background: "#000000",
    },
    " div:before": {
      left: -24,
      borderRadius: "50% 0 0 50%",
    },
    " div:after": {
      left: -24,
      borderRadius: "50% 0 0",
    },
    "@global": {
      "@keyframes heart": {
        "0%": {
          transform: "scale(0.95)",
        },
        "5%": {
          transform: "scale(1.1)",
        },
        "39%": {
          transform: "scale(0.85)",
        },
        "45%": {
          transform: "scale(1)",
        },
        "60%": {
          transform: "scale(0.95)",
        },
        "100%": {
          transform: "scale(0.9)",
        },
      },
    },
  },
}));

export const Loader = memo(() => {
  const classes = useStyles();
  return (<div className={classes.loader}>
    <div></div>
  </div>);
});
