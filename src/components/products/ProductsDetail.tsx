import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { GET_PRODUCT, Product } from "../../graphql/products"
import { graphqlFetcher, Querykeys } from "../../QueryClient"

const ProductsDetail = () => {
  const { id } = useParams()
  const { data } = useQuery<Product>([Querykeys.PRODUCTS, id], () =>
    graphqlFetcher(GET_PRODUCT, { id })
  )

  if (!data) return null

  const { title, imageUrl, price } = data

  return (
    <div>
      <h2>상품 상세</h2>
      <div className="products-detail">
        <p className="products-detail_title">{title}</p>
        <img className="products-detail_image" src={imageUrl} alt={title} />
        <span className="products-detail_price">${price}</span>
      </div>
    </div>
  )
}

export default ProductsDetail
