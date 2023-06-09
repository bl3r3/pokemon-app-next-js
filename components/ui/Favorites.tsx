import { Grid } from "@nextui-org/react";
import React from "react";
import { FavoriteCardPokemon } from "../pokemon";

interface PropsFavorites {
  favoritesPokemons: number[];
}

export const Favorites = (props: PropsFavorites) => {
  const { favoritesPokemons } = props;

  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemons.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
