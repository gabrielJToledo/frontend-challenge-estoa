import React from 'react'
import { useAppSelector } from '../../store/hooks';
import { Link } from 'react-router-dom'

function Home() {

  const allCharactersFromAPI = useAppSelector((state) => state.charactersStarWars.charactersStarWars);

  const handleSetCurrentCharacterUrl = (characterUrl: any) => {

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
          allCharactersFromAPI?.map((characterStarWars: any) => (
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


    </div>
  )
}

export default Home