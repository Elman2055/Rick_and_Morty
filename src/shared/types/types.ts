export type TCharacter = {
  image: string;
  name: string;
  species: string;
  gender: string;
  status: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
};

export type TCharacters = {
  id: number;
  image: string;
  name: string;
};

export type TListInfo = {
  id: number;
  name: string;
  air_date?: string;
  type?: string;
  dimension?: string;
  characters?: string[];
  residents?: string[];
};

export type TList = {
  list: TListInfo[];
  title: string;
  route: string;
};

export type TEpisodes = {
  id: number;
  name: string;
  air_date: string;
};
