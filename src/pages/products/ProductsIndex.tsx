import React from "react"
import { useQuery } from "react-query"
import { graphqlFetcher, Querykeys } from "../../QueryClient"
import ProductsItem from "../../components/products/ProductsItem"
import { GET_PRODUCTS, Products } from "../../graphql/products"

const ProductsIndex = () => {
  const { data } = useQuery<Products>(Querykeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS))

  console.log(data)

  return (
    <>
      <h2>상품 목록</h2>
      <ul className="products">
        {data?.products?.map((product) => (
          <ProductsItem {...product} key={product.id} />
        ))}
      </ul>
    </>
  )
}

export default ProductsIndex
