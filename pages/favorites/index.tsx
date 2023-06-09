import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layout";
import { Favorites, NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage: NextPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Favorites favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
