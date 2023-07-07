import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Link } from 'react-router-dom'
import { setCurrentCharacterUrl, setNextCharacterUrl, getCharactersFromAPI } from '../../store/ducks/charactersStarWars/actions';
import { ICharacter } from '../../interfaces/character.interface';

function Home() {
  const dispatch = useAppDispatch()
  const allCharactersFromAPI = useAppSelector((state) => state.charactersStarWars.charactersStarWars);
  const [pages, setPages] = useState(1)

  const handleSetCurrentCharacterUrl = (characterUrl: String) => {
    dispatch(setCurrentCharacterUrl(characterUrl))
  }

  const handleSetNextCharacterUrl = () => {
    const nextPage = Math.min(pages + 1, 9)
    dispatch(getCharactersFromAPI(null))
    setPages(nextPage);
    dispatch(setNextCharacterUrl(`${process.env.REACT_APP_CHARACTERS_STAR_WARS_API}/?page=${nextPage}`))
  }

  const handleSetLastCharacterUrl = () => {
    const previousPage = Math.max(pages - 1, 1)
    dispatch(getCharactersFromAPI(null))
    setPages(previousPage);
    dispatch(setNextCharacterUrl(`${process.env.REACT_APP_CHARACTERS_STAR_WARS_API}/?page=${previousPage}`))
  }

  return (
    <div className="max-w-5xl w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {allCharactersFromAPI === null ? (
          Array.from({ length: 10 }).map((_, index) => (
            <div className="border-solid h-50 rounded bg-card text-white" key={index}>
              <div className="bg-headerCard border-b-2 p-5 border-primary">
                <div className="text-center h-10 bg-slate-700 blink-32 py-2 text-xl"></div>
              </div>

              <div className="p-4">
                <div className="text-center h-10 bg-slate-700 blink-32 mt-3 py-2 text-xl"></div>
                <div className="text-center h-10 bg-slate-700 blink-32 mt-3 py-2 text-xl"></div>
              </div>
            </div>
          ))
        ) : (
          allCharactersFromAPI?.map((characterStarWars: ICharacter) => (
            <Link
              to={`/personagem/${characterStarWars.name}`}
              onClick={() => handleSetCurrentCharacterUrl(characterStarWars.url)}
              className="border-solid shadow-md shadow-black h-48 hover:scale-95 hover:shadow-inherit transition rounded bg-card text-white"
              key={characterStarWars.name}
            >
              <div className="bg-headerCard border-b-2 border-primary">
                <p className="text-center py-2 text-xl">{characterStarWars.name}</p>
              </div>

              <div className="p-4">
                <p className="text-slate-300 font-bold">Espécie</p>
                <p className="text-slate-500">{characterStarWars.species}</p>
                <p className="text-slate-300 font-bold">Ano de Nascimento</p>
                <p className="text-slate-500">{characterStarWars.birth_year}</p>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className='flex justify-center mt-7'>
        <button onClick={handleSetLastCharacterUrl} className="rounded-full shadow-md shadow-black text-slate-300 bg-blue-700 p-2 mx-3">
          Página Anterior
        </button>
        <button onClick={handleSetNextCharacterUrl} className="rounded-full shadow-md shadow-black text-slate-300 bg-blue-700 p-2 mx-3">
          Próxima Página
        </button>
      </div>
    </div>
  )
}

export default Home