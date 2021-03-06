import {
  Grid,
  Paper,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "../react-redux-hooks";

import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { Paginate } from "../components/Paginate";
import { Search } from "../components/Search";
import _ from "lodash";
import { changeFilter } from "../redux/actions";
import { getAllPokemon } from "../redux/actions";
import loading from '../assets/img/loading.gif';
import poke from "../assets/img/poke.png";

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
    "@media(max-width: 678px)": {
      width: "96%",
    },
  },
  list: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    "@media(max-width: 600px)": {
      gridTemplateColumns: "auto auto",
    },
    "@media(max-width: 480px)": {
      gridTemplateColumns: "auto",
    },
  },
  pokemon: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    padding: "1rem",
    margin: "1rem",
    backgroundColor: "#329B99",
    "&:hover": {
      boxShadow:
        "0 8px 8px 8px rgba(0, 0, 0, 0.2), 0 8px 8px 0 rgba(0, 0, 0, 0.14), 0 8px 8px 0 rgba(0, 0, 0, 0.12) !important",
      transform: "translate3d(0, 0, 0)",
      transition:
        "background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  name: {
    position: "relative",
    color: "#fed823",
    top: "-2rem",
    fontWeight: "bolder",
    fontSize: "140%",
    padding: "0.15rem",
    textTransform: "capitalize",
  },
  poke: {
    width: "40%",
    position: "relative",
    top: "-2rem",
  },
  link: {
    textDecoration: "none",
    backgroundColor: "#BD3736",
    color: "#ffffff",
    width: "max-content",
    margin: "auto",
    padding: "0.5rem",
    borderRadius: "3px",
    fontWeight: "bold",
  },
}));

export const PokemonList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonListReducer);
  const filter = useSelector((state) => state.filterReducer);

  const fetchData = (page = 1) => {
    dispatch(getAllPokemon(page));
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [search, setSearch] = useState("");

  const handleSearch = ({ target }) => {
    setSearch(target.value);
    dispatch(changeFilter(target.value));
  };

  const getData = () => {
    if (pokemonList.loading) {
      return <img className="loading" src={loading} alt={'loading . . .'} />;
    }
    if (!_.isEmpty(pokemonList.data)) {
      if (filter === "") {
        return (
          <Grid className={classes.list} container>
            {pokemonList.data.map((element) => {
              const url = element.url.split('/');
              const id = url[url.length - 2];
              const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
              return (
                <Grid key={element.name}>
                  <Paper className={classes.pokemon}>
                    <img
                      className={classes.poke}
                      src={imageURL}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = poke;
                      }}
                      alt={element.name}
                    />
                    <Typography className={classes.name}>
                      {element.name}
                    </Typography>
                    <Link
                      className={classes.link}
                      to={`/pokemon/${element.name}`}
                    >
                      View Detail
                    </Link>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        );
      } else {
        return (
          <Grid className={classes.list} container>
            {pokemonList.data
              .filter((element) => element.name.toLowerCase().includes(filter))
              .map((element) => {
                const url = element.url.split('/');
              const id = url[url.length - 2];
                const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
                return (
                  <Grid key={element.name}>
                    <Paper className={classes.pokemon}>
                      <img
                        className={classes.poke}
                        src={imageURL}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = poke;
                        }}
                        alt={element.name}
                      />
                      <Typography className={classes.name}>
                        {element.name}
                      </Typography>
                      <Link
                        className={classes.link}
                        to={`/pokemon/${element.name}`}
                      >
                        View Detail
                      </Link>
                    </Paper>
                  </Grid>
                );
              })}
          </Grid>
        );
      }
    }
    if (pokemonList.error !== "") {
      return <p>error...</p>;
    }
    return <p>unable to find data, try later...</p>;
  };
  return (
    <>
      <Paper className={classes.root}>
        <Toolbar>
          <Search
            name={search}
            id={search}
            autoComplete="false"
            label="Search Pokemon . . ."
            onChange={handleSearch}
          />
        </Toolbar>
        <div>{getData()}</div>
        {!_.isEmpty(pokemonList.data) && (
          <Paginate
            pageCount={Math.ceil(pokemonList.count / 9)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={(data) => fetchData(data.selected + 1)}
          />
        )}
        <Footer />
      </Paper>
    </>
  );
};
