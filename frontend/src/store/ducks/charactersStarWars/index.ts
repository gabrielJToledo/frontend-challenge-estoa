import { charactersStarWarsTypes } from "./types";
import { Reducer } from "redux";

const initalState = {
    charactersStarWars: null
}

const charactersStarWarsReducer: Reducer = (state = initalState, action) => {
    switch (action.type) {
        case charactersStarWarsTypes.getCharactersFromAPI:
            return { ...state, charactersStarWars: action.payload }
        default:
            return state
    }
}

export default charactersStarWarsReducer