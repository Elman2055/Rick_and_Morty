import axios from "axios";

class RickAndMortyService {
  static API_BASE_ULR = "https://rickandmortyapi.com/api";

  static getCharacter = async (id: number) => {
    try {
      const url = `${RickAndMortyService.API_BASE_ULR}/character/${id}`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  static getSelectedListCharacters = async (url: string) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
}

export default RickAndMortyService;
