import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="pokemon"
        width={70}
        height={70}
      />
      <NextLink href="/" style={{ display: "flex", color: "white" }}>
        <Text color="withe" h2>
          P
        </Text>
        <Text color="withe" h3>
          okemon
        </Text>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" style={{ color: "white" }}>
        <Text color="withe" h3>
          Favoritos
        </Text>
      </NextLink>
    </div>
  );
};
