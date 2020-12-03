import React, { useState, useEffect } from 'react'

import './assets/styles/global-style.css'

import Container from './components/atoms/container/index'
import Header from './components/organisms/header/index'
import Search from  './components/organisms/search/index'
import Table from './components/organisms/table/index'
import Product from './components/organisms/product/index'

import './assets/styles/global-style.css'

const App = () => {
  const [products, setProducts] = useState([])
  const [sort, setSort] = useState({
    key: 'id',
    ascending: true
  })

  useEffect(() => {
    const productsList = JSON.parse(localStorage.getItem('products')) || []
    setProducts(productsList)
  }, [])

  const handleDelete = (id) => {
    const filteredProducts =  products.filter((product) => product.id !== id )
    
    setProducts(filteredProducts)
    localStorage.setItem('products', JSON.stringify(filteredProducts))
  }

  const handleSort = (tableField) => { 
    if (sort.key === tableField) {
      setSort({
        key: tableField,
        ascending: !sort.ascending,
      })
      sortProducts(tableField, !sort.ascending)
    } else {
      setSort({
        key: tableField,
        ascending: true,
      })
      sortProducts(tableField, true)
    }
  }

  const sortProducts = (key, ascending) => {
    const sortedProducts = products.sort((a, b) => {
      if (a[key] < b[key]) {
        return ascending ? -1 : 1
      }
      if (a[key] > b[key]) {
        return ascending ? 1 : -1
      }
      return 0
    })
    setProducts(sortedProducts)
  }

  return (
    <>
      <Container>
        <Header />
        <Search />
        <Product />
        <Table
          onDelete={handleDelete}
          onSort={handleSort}
          products={products} />
      </Container>
    </>
  );
}

export default App;
