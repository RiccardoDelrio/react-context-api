import { createContext, useState, useContext } from "react"

const ErrorContext = createContext()

export function ErrorProvider({ children }) {
    const [error, setError] = useState(null)

    const showError = (message) => {
        setError(message)
        setTimeout(() => setError(null), 3000)
    }

    return (
        <ErrorContext.Provider value={{ error, showError }}>
            {children}
        </ErrorContext.Provider>
    )
}

export function useError() {
    const context = useContext(ErrorContext)
    if (!context) {
        throw new Error("useError deve essere utilizzato all'interno di ErrorProvider")
    }
    return context
}

