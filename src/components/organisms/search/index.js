import React from 'react'
import './style.css'

import Input from '../../atoms/input/index'
import Button from '../../atoms/buttons/index'

import search from '../../../assets/icons/search.svg'

const Search = () => {
  return(
    <section className="search-form">
      <Input 
      id="search-input"
      placeholder="Digite o nome do produto" 
      />
      <Button
      id="search-button"
      text="Pesquisar" 
      src={search} 
      alt="search-button" 
      />
    </section>
  )
}

export default Search 
