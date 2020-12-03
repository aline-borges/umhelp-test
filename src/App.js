import React, { useState, useEffect } from 'react'

import './assets/styles/global-style.css'

import Container from './components/atoms/container'
import Header from './components/organisms/header'
import Table from './components/organisms/table'
import Product from './components/organisms/product'
import Search from './components/organisms/search'

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

  const handleSearch = (event) => {
    const { value } = event.target
    const productsList = JSON.parse(localStorage.getItem('products')) || []
    const filteredProducts = productsList.filter(product => 
      product.productName.toLowerCase().startsWith(value.toLowerCase()))
    setProducts(filteredProducts)
  }

  const handleStockChange = (id, operation) => {
    const changedProduct = products.find(product => product.id === id)
    const index = products.findIndex(product => product.id === id)
    let newStock
    if (operation === 'add') {
      newStock = Number(changedProduct.stock) + 1
    }
    if (operation === 'sub') {
      newStock = Number(changedProduct.stock) - 1
    }
    if (newStock === 0) {
      handleDelete(id)
      return
    }
    changedProduct.stock = newStock
    const newProducts = products.filter(product => product.id !== id)
    newProducts.splice(index, 0, changedProduct)
    setProducts(newProducts)
    localStorage.setItem('products', JSON.stringify(newProducts))
  }

  return (
    <>
      <Container>
        <Header />
        <Product />
        <Search onSearch={handleSearch} />
        <Table
          onDelete={handleDelete}
          onSort={handleSort}
          onChangeStock={handleStockChange}
          products={products} />
      </Container>
    </>
  );
}

export default App;
