import { charactersStarWarsTypes } from "./types";
import { Reducer } from "redux";

const initalState = {
    charactersStarWars: null,
    currentCharacter: null,
    nextCharacterUrl: `${process.env.REACT_APP_CHARACTERS_STAR_WARS_API}/?pages=1`,
    currentCharacterFromAPI: null
}

const charactersStarWarsReducer: Reducer = (state = initalState, action) => {
    switch (action.type) {
        case charactersStarWarsTypes.getCharactersFromAPI:
            return { ...state, charactersStarWars: action.payload }
        case charactersStarWarsTypes.setCurrentCharacterUrl:
            return { ...state, currentCharacter: action.payload }
        case charactersStarWarsTypes.setNextCharacterUrl:
            return { ...state, nextCharacterUrl: action.payload }
        default:
            return state
    }
}

export default charactersStarWarsReducer