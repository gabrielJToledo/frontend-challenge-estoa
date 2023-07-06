import { action } from "typesafe-actions";
import { charactersStarWarsTypes } from "./types";

export const getCharactersFromAPI = (payload: any) => action(charactersStarWarsTypes.getCharactersFromAPI, payload)