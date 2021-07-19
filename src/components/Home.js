import { Footer } from "./Footer";
/* eslint-disable react/display-name */
// import { Paper } from "@material-ui/core";
import groove from "../assets/img/groove.gif";
import logo from "../assets/img/logo.png";
import { makeStyles } from "@material-ui/core";
import { memo } from "react";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: "6rem",
    left: 0,
    right: 0,
    width: "80%",
    paddingBottom: 0,
    borderTopLeftRadius: "250px 33px",
    borderTopRightRadius: "250px 33px",
    borderBottomLeftRadius: "250px 33px",
    borderBottomRightRadius: "250px 33px",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    margin: "auto",
    alignItems: "center",
    "@media(max-width: 806px)": {
      width: "96%",
    },
  },
  groove: {
    padding: "1rem 4rem 8rem 4rem",
    width: "60%",
    margin: "auto",
  },
  logo: {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-start",
    top: "1.6rem",
    padding: 0,
    width: "20%",
    "@media(max-width: 900px)": {
      width: "30%",
    },
    "@media(max-width: 480px)": {
      width: "40%",
      paddingTop: "3rem",
    },
  },
  title: {
    textAlign: "center",
    backgroundColor: "#4570F0",
    width: "max-content",
    margin: "1rem auto",
    padding: "1rem",
    fontSize: "1.4rem",
    color: "#ffffff",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      fontSize: "1.42rem",
    },
  },
}));

export const Home = memo(() => {
  const classes = useStyles();
  return (
    <>
      <img className={classes.logo} src={logo} alt={groove} />

      <a href={"/pokemons"} className={classes.title}>
        View Pokemon List
      </a>
      <img className={classes.groove} src={groove} alt={groove} />
      <Footer />
    </>
  );
});
