import { useContext } from "react"
import FilmContext from "../contexts/FilmContext"
import Card from "./PostCard";
export default function PostList() {
    const films = useContext(FilmContext);

    return (
        <>
            {films.map((film) => (
                <div className="col " key={film.id}>
                    <Card thisFilms={film}></Card>
                </div>
            ))}
        </>
    )
}
