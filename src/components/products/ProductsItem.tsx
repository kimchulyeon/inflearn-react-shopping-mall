import React from "react"
import { Link } from "react-router-dom"
import { Product } from "../../graphql/products"

const ProductsItem = (props: Product) => {
  return (
    <li className="products-item">
      <Link to={`/products/${props.id}`}>
        <p className="products-item_title">{props.title}</p>
        <img className="products-item_image" src={props.imageUrl} alt={props.title} />
        <span className="products-item_price">${props.price}</span>
      </Link>
    </li>
  )
}

export default ProductsItem
