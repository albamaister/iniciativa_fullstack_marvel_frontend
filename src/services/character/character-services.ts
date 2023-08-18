import { BASE_URL } from "../../utils/constants/services";
import { Character } from "../../utils/interfaces/character";

export const getheroes = async(): Promise<Character[]> => {
    const response = await fetch(`${BASE_URL}/heroes`);
  
    if (!response.ok) {
      throw new Error(`Error fetching heroes: ${response.statusText}`);
    }
    
    const heroes = await response.json();
    return heroes as Character[];
}