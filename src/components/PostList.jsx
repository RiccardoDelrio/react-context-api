import { useContext } from "react"
import FilmContext from "../contexts/FilmContext"
import Card from "./PostCard";
export default function PostList() {
    const products = useContext(FilmContext);

    return (
        <>
            {products.slice(0, 4).map((prodotto) => (
                <div className="col " key={prodotto.id}>
                    <Card thisFilms={prodotto}></Card>
                </div>
            ))}

        </>
    )
}
