import React from 'react'
import SearchInput from './search-input'
import { Link } from 'react-router'

export default function Menu() {
    return (
      <header>
        <Link to="/">Classifications list</Link>
        <SearchInput location={location}/>
      </header>
    )
}
