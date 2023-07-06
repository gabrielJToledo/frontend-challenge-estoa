import { useEffect } from 'react'
import axios from 'axios'
import { useAppDispatch } from '../store/hooks'
import { getCharactersFromAPI } from '../store/ducks/charactersStarWars/actions'

export const useGetCharactersStarWarsFromAPI = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_CHARACTERS_STAR_WARS_API}`)
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
  }, [dispatch])
}
