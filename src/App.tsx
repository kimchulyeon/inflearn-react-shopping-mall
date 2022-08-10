import React from "react"
import GlobalRoute from "./routes/GlobalRoute"
import { ReactQueryDevtools } from "react-query/devtools"
import { QueryClient, QueryClientProvider } from "react-query"
import { getClient } from "./QueryClient"
import { Navbar } from "./components/navbar/Navbar"

const App = () => {
  // const queryClient = new QueryClient()
  const queryClient = getClient()

  return (
    <>
      {/* React Query Use */}
      <QueryClientProvider client={queryClient}>
        {/* Navbar */}
        <Navbar />
        {/* Routss */}
        <GlobalRoute />
        {/* React Query Devtools */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
