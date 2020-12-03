import React from 'react'
import './style.css'

import { EditButton } from '../../atoms/buttons/index'

import settings from '../../../assets/icons/settings.svg'
import del from '../../../assets/icons/delete.svg'

const Table = (props) => {
  const renderRow = product => {
    return(
      <tr 
      key={product.id}
      className="products-row">
      <td 
      id="product-cod"
      className="products-item">{product.id}</td>
      <td 
      id="product-name"
      className="products-item">{product.productName}</td>
      <td 
      id="product-price"
      className="products-item">{product.price}</td>
      <td 
      id="product-stock"
      className="products-item">{product.stock}</td>
      <td 
      id="product-stock-price"
      className="products-item">R${product.price * product.stock}</td>
      <td className="products-item">
        <EditButton
        id="delete-button" 
        src={del} 
        alt="delete-icon"
        onClick={() => props.onDelete(product.id)}
        />
      </td>
    </tr>
    )
  }

  return(
    <section className="products-list">
      <table className="products-table">
        <thead className="products-header">
          <tr className="products-row">
            <th className="products-attribute">
              <button
                onClick={() => props.onSort('id')}
              >
                Cod
              </button>
            </th>
            <th className="products-attribute">
              <button
                onClick={() => props.onSort('productName')}
              >
                Nome
              </button>
            </th>
            <th className="products-attribute">
              <button
                onClick={() => props.onSort('price')}
              >
                Preço Unitário 
              </button>
            </th>
            <th className="products-attribute">
              <button
                onClick={() => props.onSort('stock')}
              >
                Em Estoque
              </button>              
            </th>
            <th className="products-attribute">
              <button
                onClick={() => props.onSort('stockPrice')}
              >
                Preço do Estoque 
              </button>
            </th>
            <th className="products-attribute">
              <img 
              className="settings-icon" 
              src={settings} 
              alt="settings-icon" />
            </th>
          </tr>
        </thead>

        <tbody className="products-body">
          {props.products.map(product => renderRow(product))}
        </tbody>
      </table>
    </section>
  )
}

export default Table 
