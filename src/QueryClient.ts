import { QueryClient } from "react-query"
import { request, RequestDocument } from "graphql-request"

type AnyOBJ = { [key: string]: any }

export const getClient = (() => {
  let client: QueryClient | null = null

  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      })
    return client
  }
})()

const SERVER_URL = "https://fakestoreapi.com"

export const restFetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  path: string
  body?: AnyOBJ
  params?: AnyOBJ
}) => {
  try {
    let url = `${SERVER_URL}${path}`
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": SERVER_URL,
      },
    }

    if (params) {
      const searchParams = new URLSearchParams(params)
      url += "?" + searchParams.toString()
    }

    if (body) {
      fetchOptions.body = JSON.stringify(body)
    }

    const res = await fetch(url, fetchOptions)
    const json = await res.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

const MOCK_URL = "/"

export const graphqlFetcher = async (query: RequestDocument, variables = {}) => {
  return request(MOCK_URL, query, variables)
}

export const Querykeys = {
  PRODUCTS: "PRODUCTS",
}
