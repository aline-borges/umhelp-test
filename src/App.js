import React from 'react'

import './assets/styles/global-style.css'

import Container from './components/atoms/container/index'
import Header from './components/organisms/header/index'
import Search from  './components/organisms/search/index'
import Table from './components/organisms/table/index'
import Product from './components/organisms/product/index'

import './assets/styles/global-style.css'

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Search />
        <Table />
        <Product />
      </Container>
    </>
  );
}

export default App;
