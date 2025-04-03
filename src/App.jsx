import PostPage from "./components/PostPage"
import { ErrorProvider } from "./contexts/ErrorContext"
import ProductsProvider from "./contexts/ProductsProvider"

function App() {
  return (
    <ErrorProvider>
      <ProductsProvider>
        <PostPage />
      </ProductsProvider>
    </ErrorProvider>
  )
}

export default App
