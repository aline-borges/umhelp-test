import React, { useState, useEffect } from 'react'
import './style.css'

import Input from '../../atoms/input'
import Button from '../../atoms/buttons/button'

import create from '../../../assets/icons/create.svg'

const Product = () => {
  const [product, setProduct] = useState({
    id: 1,
    productName: '',
    price: '',
    stock: '',
    stockPrice: ''
  })

  useEffect(() => {
    const nextId = getNextId()
    setProduct({
      id: nextId,
      productName: '',
      price: '',
      stock: '',
      stockPrice: '',
    })
  }, [])

  const handleChange = (event) => {
    const { value, name } = event.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(product.stock === '0') {
      alert('Estoque não pode ser abaixo de 1')
      return
    }
    const products = JSON.parse(localStorage.getItem('products')) || []
    products.push(product)
    const orderedProducts = products.sort((a, b) => a.id - b.id)
    localStorage.setItem('products', JSON.stringify(orderedProducts))
    const nextId = getNextId()
    setProduct({
      id: nextId,
      productName: '',
      price: '',
      stock: '',
      stockPrice: product.price * product.stock,
    })
  }

  const getNextId = () => {
    const products = JSON.parse(localStorage.getItem('products')) || []
    if (!products.length) {
      return 1
    }
    const nextId = products.find((product, index) => {
      return product.id - 1 !== index
    })

    if (nextId) return nextId.id - 1

    return products.length + 1
  }

  return(
    <section className="product">
      <form className="product-form" onSubmit={handleSubmit}>
        <p className="title-form">Criar Item</p>
        <Input
        type="number"
        attribute="Cod:"
        readOnly
        value={product.id}
        />

        <Input 
        type="text"
        placeholder="Ex: Mesa"
        attribute="Nome:"
        name="productName"
        onChangeText={handleChange}
        value={product.name}
        required="required"
        />

        <Input
        type="number"
        placeholder="Ex: 250.50"
        attribute="Preço Unitário:" 
        name="price"
        onChangeText={handleChange}
        value={product.price}
        />
        
        <Input
        type="number"
        placeholder="Ex: 100"
        attribute="Em Estoque:" 
        name="stock"
        onChangeText={handleChange}
        value={product.stock}
        />

        <Button 
        id="create-product-button"
        text="Criar"
        src={create}
        alt="create-icon"
        />
      </form>
    </section>
  )
}

export default Product 
