import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import HeadComponent from "../components/molecules/Head";
import { useEffect, useState } from "react";
import { getheroes } from "../services/character/character-services";
import Characters from "../components/organisms/Characters/characters";
import { Character } from "../utils/interfaces/character";

const Home: NextPage = () => {
  const [heroes, setHeroes] = useState<Character[]>([])


  useEffect( () => {
    getheroes().then((response) => {
      setHeroes(response)
    })
  },[])
  
  return (
    <div className={styles.container}>
      <HeadComponent/>

      <Characters heroes={heroes}/>
    </div>
  );
};

export default Home;
