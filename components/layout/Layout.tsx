import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

type PropsLayout = {
  children: ReactNode;
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<PropsLayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Roberto Carrasquel" />
        <meta name="description" content={`Info about pokemon ${title} `} />
        <meta name="description" content={`pokemon, ${title}, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

Layout.defaultProps = {
  title: "Pokemo App",
};
