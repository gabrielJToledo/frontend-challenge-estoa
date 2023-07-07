import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { Link } from 'react-router-dom';

function Character() {
  const allCharacterFromAPI = useAppSelector((state) => state.charactersStarWars.charactersStarWars)
  const currentCharacterURL = useAppSelector((state) => state.charactersStarWars.currentCharacter)

  const currentCharacter = allCharacterFromAPI && allCharacterFromAPI.find((character: { url: string }) => character.url === currentCharacterURL);

  console.log(currentCharacter.species)

  return (
    <div className="max-w-5xl  flex justify-center w-full">
      {!currentCharacter ? (
        <div className="border-solid shadow-md flex flex-col items-center shadow-black w-4/5 h-screen transition rounded bg-card text-white">
          <div className="bg-headerCard border-b-2 w-full border-primary">
            <p className="text-center py-2 text-xl">Nenhum Personagem Selecionado</p>
          </div>

          <Link className='rounded-sm w-48 my-4 bg-teal-400 text-center p-3' to={`/`}>Selecionar Personagem</Link>
        </div>
      ) : (
        <div className="border-solid shadow-md h-screen shadow-black w-4/5 transition rounded bg-card text-white">
          <div className="bg-headerCard border-b-2 border-primary">
            <p className="text-center py-2 text-xl">{currentCharacter.name}</p>
          </div>

          <div className="p-4 flex flex-col overflow-hidden">
            <p className="text-slate-300 font-bold">Ano de Nascimento</p>
            <p className="text-slate-500">{currentCharacter.birth_year}</p>

            <p className="text-slate-300 font-bold">Cor dos Olhos</p>
            <p className="text-slate-500">{currentCharacter.eye_color}</p>

            <p className="text-slate-300 font-bold">Gênero</p>
            <p className="text-slate-500">{currentCharacter.gender}</p>

            <p className="text-slate-300 font-bold">Cor do Cabelo</p>
            <p className="text-slate-500">{currentCharacter.hair_color}</p>

            <p className="text-slate-300 font-bold">Altura</p>
            <p className="text-slate-500">{currentCharacter.height}</p>

            <p className="text-slate-300 font-bold">Massa</p>
            <p className="text-slate-500">{currentCharacter.mass}</p>

            <p className="text-slate-300 font-bold">Cor de Pele</p>
            <p className="text-slate-500">{currentCharacter.skin_color}</p>

            <p className="text-slate-300 font-bold">Planeta Natal</p>

            {currentCharacter.homeworld.startsWith("https") ? (
              <div className='h-5 bg-slate-700 blink-32 py-2'></div>
            ) : (
              <p className="text-slate-500">
                {currentCharacter.homeworld}
              </p>
            )}


            <p className="text-slate-300 font-bold">Filmes</p>
            {currentCharacter.films.map((film: String) => {
              return film.startsWith("https") ? (
                <div className='h-5 bg-slate-700 blink-32 py-2'></div>
              ) : (
                <p className="text-slate-500">
                  {film}
                </p>
              );
            })}

            <p className="text-slate-300 font-bold">Espécie</p>
            <p className="text-slate-500">{currentCharacter.species.length === 1 || currentCharacter.species.length === 0 ? (
              <div className='h-5 bg-slate-700 blink-32 py-2'></div>
            ) : (
              <div>{currentCharacter.species}</div>
            )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Character;
