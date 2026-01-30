import PostPage from "./components/PostPage"
import FilmContext from "./contexts/FilmContext"
import { useState, useEffect } from "react"
import { ErrorProvider, useError } from "./contexts/ErrorContext"

function AppContent() {
  const [products, setProducts] = useState([])
  const { showError } = useError()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(() => {
        showError("Errore nel caricamento dei prodotti")
      })
  }, [showError])

  return (
    <FilmContext.Provider value={products}>
      <PostPage />
    </FilmContext.Provider>
  )
}

export default function App() {
  return (
    <ErrorProvider>
      <AppContent />
    </ErrorProvider>
  )
}
