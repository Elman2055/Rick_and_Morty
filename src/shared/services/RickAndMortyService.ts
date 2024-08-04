import axios from "axios";

class RickAndMortyService {
  static API_BASE_ULR = "https://rickandmortyapi.com/api";

  static getCharacters = async (page: number) => {
    try {
      const url = `${RickAndMortyService.API_BASE_ULR}/character/?page=${page}`;
      const { data } = await axios.get(url);
      return data.results;
    } catch (e) {
      console.log(e);
    }
  };

  static getEpisodes = async (page: number) => {
    try {
      const url = `${RickAndMortyService.API_BASE_ULR}/episode/?page=${page}`;
      const { data } = await axios.get(url);
      return data.results;
    } catch (e) {
      console.log(e);
    }
  };

  static getLocations = async (page: number) => {
    try {
      const url = `${RickAndMortyService.API_BASE_ULR}/location/?page=${page}`;
      const { data } = await axios.get(url);
      return data.results;
    } catch (e) {
      console.log(e);
    }
  };

  static getCharacter = async (id: number) => {
    try {
      const url = `${RickAndMortyService.API_BASE_ULR}/character/${id}`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  static getEpisodeInfo = async (id: number) => {
    try {
      const url = `${RickAndMortyService.API_BASE_ULR}/episode/${id}`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  static getLocationInfo = async (id: number) => {
    try {
      const url = `${RickAndMortyService.API_BASE_ULR}/location/${id}`;
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
