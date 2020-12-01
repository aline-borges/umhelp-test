import React from 'react'
import './style.css'

import { EditButton } from '../../atoms/buttons/index'

import settings from '../../../assets/icons/settings.svg'
import edit from '../../../assets/icons/edit.svg'
import del from '../../../assets/icons/delete.svg'

const Table = (props) => {
  return(
    <section className="products-list">
      <table className="products-table">
        <thead className="products-header">
          <tr className="products-row">
            <th className="products-attribute">Cod</th>
            <th className="products-attribute">Nome</th>
            <th className="products-attribute">Preço Unitário</th>
            <th className="products-attribute">Em Estoque</th>
            <th className="products-attribute">Preço do Estoque</th>
            <th className="products-attribute">
              <img 
              className="settings-icon" 
              src={settings} 
              alt="settings-icon" />
            </th>
          </tr>
        </thead>

        <tbody className="products-body">
          <tr className="products-row">
            <td 
            id="product-cod"
            className="products-item">01</td>
            <td 
            id="product-name"
            className="products-item">Cadeira</td>
            <td 
            id="product-price"
            className="products-item">R$ 45.00</td>
            <td 
            id="product-stock"
            className="products-item">100</td>
            <td 
            id="product-stock-price"
            className="products-item">R$ 450.00</td>
            <td className="products-item">
              <EditButton
              id="edit-button" 
              src={edit} 
              alt="edit-icon"
              />
              <EditButton
              id="delete-button" 
              src={del} 
              alt="delete-icon"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Table 
