import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex justify-center bg-secondary-100 p-3">
      <div className="max-w-5xl w-full">
        <Link to={`/`} className='text-primary starWarsFont text-3xl'>Star Wars Academy</Link>
      </div>
    </header>
  )
}

export default Header