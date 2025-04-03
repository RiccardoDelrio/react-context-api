import { useState, useEffect, useContext } from "react"
import FilmContext from "./FilmContext"
import { ErrorContext } from "./ErrorContext"

export default function ProductsProvider({ children }) {
    const [products, setProducts] = useState([])
    const { showError } = useContext(ErrorContext)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) throw new Error('Chiamata fallita')
                return response.json()
            })
            .then(data => setProducts(data))
            .catch(error => {
                showError('Errore nel caricamento dei prodotti: ' + error.message)
            })
    }, [showError])

    return (
        <FilmContext.Provider value={products}>
            {children}
        </FilmContext.Provider>
    )
}
