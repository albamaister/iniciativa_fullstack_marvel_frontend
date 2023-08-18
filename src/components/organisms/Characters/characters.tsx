import React, { FC } from "react";
import styles from "./characters.module.css";
import { Character } from "../../../utils/interfaces/character";
import Card from "../../atoms/Card/card";

interface CharacterProps {
  heroes: Character[];
}

const Characters: FC<CharacterProps> = ({ heroes }) => {
  console.log(heroes, "heroeseses");
  return (
    <>
      <div className={styles.title}>Listado de superheroes</div>
      <div className={styles.card_container}>
        {heroes.map((heroe) => {
          return (
            <Card
              key={heroe.id}
              imageSrc={`${heroe.thumbnail!.path!}.${
                heroe.thumbnail!.extension
              }`}
              name={heroe.name!}
            />
          );
        })}
      </div>
    </>
  );
};

export default Characters;
