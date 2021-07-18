import { Card, Paper, Typography, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";
import { getSinglePokemon } from "../redux/actions";
import { useEffect } from "react";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: "6rem",
    left: 0,
    right: 0,
    width: "80%",
    paddingBottom: 60,
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
  details: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    marginTop: "6rem",
    padding: "1rem",
    backgroundColor: "#329B99",
    "@media(max-width: 600px)": {
      gridTemplateColumns: "auto",
      width: "90%",
    },
  },
  mainCard: {
    width: "18rem",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    "@media(max-width: 600px)": {
      width: "100%",
    },
  },
  mainImage: {
    width: "100%",
  },
  contentText: {
    padding: "1rem",
    backgroundColor: "#010113",
    color: "#FED823",
  },
  poke: {
    textAlign: "center",
    fontSize: "2rem",
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "#329B99",
    fontFamily: "'Oleo Script Swash Caps', cursive",
  },
  stats: {
    textAlign: "center",
  },
  abilities: {
    textAlign: "center",
  },
  sprites: {
    display: "grid",
    alignItems: "center",
    padding: "1rem",
    "@media(max-width: 600px)": {
      gridTemplateColumns: "auto auto auto",
    },
  },
}));

export const Pokemon = (props) => {
  const pokemanName = props.match.params.name;

  const classes = useStyles();

  useEffect(() => {
    dispatch(getSinglePokemon(pokemanName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonReducer);

  const getPokemon = () => {
    if (pokemon.loading) {
      return <p>loading...</p>;
    }
    if (!_.isEmpty(pokemon.data[pokemanName])) {
      const pokemonData = pokemon.data[pokemanName];
      return (
        <Paper className={classes.root}>
          <Paper className={classes.details}>
            <Card className={classes.mainCard}>
              <img
                className={classes.mainImage}
                src={pokemonData.sprites.front_default}
                alt={pokemanName}
              />
            </Card>
            <Paper className={classes.sprites}>
              <img src={pokemonData.sprites.back_default} alt={pokemanName} />

              <img src={pokemonData.sprites.front_shiny} alt={pokemanName} />

              <img src={pokemonData.sprites.back_shiny} alt={pokemanName} />
            </Paper>
            <Paper className={classes.contentText}>
              <Typography className={classes.poke}>{pokemanName}</Typography>
              <div className={classes.stats}>
                <h2>Stats</h2>
                {pokemonData.stats.map((element) => (
                  <div key={element.stat.name}>
                    <p>
                      {element.stat.name} {element.base_stat}
                    </p>
                  </div>
                ))}
              </div>
              <div className={classes.abilities}>
                <h2>Abilities</h2>
                {pokemonData.abilities.map((element) => (
                  <div key={element.ability.name}>
                    <p>{element.ability.name}</p>
                  </div>
                ))}
              </div>
            </Paper>
          </Paper>
        </Paper>
      );
    }
    if (pokemon.error !== "") {
      return <p>error...</p>;
    }
    return <p>unable to load pokemon now, try later ...</p>;
  };
  return <div>{getPokemon()}</div>;
};
