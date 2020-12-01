import React from 'react'
import './style.css'

import ProductInput from '../../molecules/productInput/index'
import Button from '../../atoms/buttons/index'

import create from '../../../assets/icons/create.svg'

const Product = () => {
  return(
    <section className="product">
      <form className="product-form">
        <p className="title-form">Criar Item</p>
        <ProductInput
        id="product-cod"
        attribute="Cod:"
        />
        <ProductInput 
        id="product-name"
        attribute="Nome:"
        />
        <ProductInput
        id="product-unit-price"
        attribute="Preço Unitário:" />
        <ProductInput
        id="product-stock-quantity"
        attribute="Em Estoque:" />
        <ProductInput 
        id="product-stock-price"
        attribute="Preço do Estoque:"
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
