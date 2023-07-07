import { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getCharactersFromAPI } from '../store/ducks/charactersStarWars/actions';
import { ICharacter } from '../interfaces/character.interface';

export const useGetCharactersStarWarsFromAPI = () => {
  const dispatch = useAppDispatch();
  const nextUrl = useAppSelector((state) => state.charactersStarWars.nextCharacterUrl)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(nextUrl)
        const charactersFromAPI = response.data

        await Promise.all(
          charactersFromAPI.results.map(async (data: ICharacter) => {
            if (data.species.length === 0) {
              data.species = 'Humano'
            } else {
              try {
                const speciesResponse = await axios.get(data.species[0])
                data.species = speciesResponse.data.name
              } catch (err) {
                console.log(err)
              }
            }

            const homeworldResponse = await axios.get(data.homeworld)
            data.homeworld = homeworldResponse.data.name

            await Promise.all(
              data.films.map(async (filmUrl: string, index: number) => {
                try {
                  const filmResponse = await axios.get(filmUrl)
                  data.films[index] = filmResponse.data.title
                } catch (err) {
                  console.log(err)
                }
              })
            );
          })
        );

        dispatch(getCharactersFromAPI(charactersFromAPI.results))
      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, [dispatch, nextUrl])
};
