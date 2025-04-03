import { createContext, useState } from 'react'

export const ErrorContext = createContext()

export function ErrorProvider({ children }) {
    const [error, setError] = useState(null)

    const showError = (message) => {
        setError(message)
        setTimeout(() => setError(null), 3000) // Auto-hide dopo 3 secondi
    }

    return (
        <ErrorContext.Provider value={{ error, showError }}>
            {children}
        </ErrorContext.Provider>
    )
}

