import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Paginate } from "./Paginate";
import { Search } from "./Search";
import { Toolbar } from "@material-ui/core";
import _ from "lodash";
import { changeFilter } from "../redux/actions";
import { getAllPokemon } from "../redux/actions";

export const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonListReducer);
  const filter = useSelector((state) => state.filterReducer);

  const fetchData = (page = 1) => {
    dispatch(getAllPokemon(page));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [search, setSearch] = useState("");

  const handleSearch = ({ target }) => {
    setSearch(target.value);
    dispatch(changeFilter(target.value));
  };

  const getData = () => {
    console.log("list", pokemonList);
    if (pokemonList.loading) {
      return <p>loading...</p>;
    }
    if (!_.isEmpty(pokemonList.data)) {
      if (filter === "") {
        return (
          <>
            {pokemonList.data.map((element) => (
              <div key={element.name}>
                <span>{element.name}</span>
                <Link to={`/pokemon/${element.name}`}>View Detail</Link>
              </div>
            ))}
          </>
        );
      } else {
        return (
          <>
            {pokemonList.data
              .filter((element) => element.name.toLowerCase().includes(filter))
              .map((element) => (
                <div key={element.name}>
                  <span>{element.name}</span>
                  <Link to={`/pokemon/${element.name}`}>View Detail</Link>
                </div>
              ))}
          </>
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
      <Toolbar>
        <Search
          name={search.name}
          id={search.name}
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
    </>
  );
};
