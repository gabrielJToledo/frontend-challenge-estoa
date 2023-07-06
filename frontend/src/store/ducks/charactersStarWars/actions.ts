import { action } from "typesafe-actions";
import { charactersStarWarsTypes } from "./types";

export const getCharactersFromAPI = (payload: any) => action(charactersStarWarsTypes.getCharactersFromAPI, payload)
export const setCurrentCharacterUrl = (payload: any) => action(charactersStarWarsTypes.setCurrentCharacterUrl, payload)
export const setNextCharacterUrl = (payload: any) => action(charactersStarWarsTypes.setNextCharacterUrl, payload)