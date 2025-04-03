import { useContext } from 'react'
import { ErrorContext } from '../contexts/ErrorContext'

export default function ErrorMessage() {
    const { error } = useContext(ErrorContext)

    if (!error) return null

    return (
        <div className="alert alert-danger" role="alert">
            {error}
        </div>
    )
}
