import PostPage from "./components/PostPage"
import FilmContext from "./contexts/FilmContext"
import { useState, useEffect } from "react"

function App() {
  const [products, setProducts] = useState([]) // Corretto il nome e inizializzato con array vuoto

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <FilmContext.Provider value={products}>
        <PostPage />
      </FilmContext.Provider>
    </>
  )
}

export default App
