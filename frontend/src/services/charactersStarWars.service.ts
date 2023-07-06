import { useEffect } from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getCharactersFromAPI } from '../store/ducks/charactersStarWars/actions'

export const useGetCharactersStarWarsFromAPI = () => {
  const dispatch = useAppDispatch()
  const nextUrl = useAppSelector((state) => state.charactersStarWars.nextCharacterUrl)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(nextUrl)
        const charactersFromAPI = response.data

        await Promise.all(
          charactersFromAPI.results.map(async (data: any) => {
            if (data.species.length === 0) {
              data.species = 'Humano'
            } else {
              try {
                const speciesResponse = await axios.get(data.species[0])
                data.species = speciesResponse.data.name
              } catch (error) {
                console.log(error)
              }
            }

            const homeworldResponse = await axios.get(data.homeworld)
            data.homeworld = homeworldResponse.data.name
          })
        )

        dispatch(getCharactersFromAPI(charactersFromAPI.results))
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [dispatch, nextUrl])
}
