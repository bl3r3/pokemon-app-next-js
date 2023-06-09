import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface FavoriteCardPokemonProps {
  id: number;
}

export const FavoriteCardPokemon = (props: FavoriteCardPokemonProps) => {
  const { id } = props;

  const router = useRouter();

  const onClickCard = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} lg={1}>
      <Card onClick={onClickCard} isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`${id}`}
          width={"100%"}
          height={"140px"}
        />
      </Card>
    </Grid>
  );
};
