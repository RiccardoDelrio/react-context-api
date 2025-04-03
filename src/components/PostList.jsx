import { useContext } from "react"
import FilmContext from "../contexts/FilmContext"

export default function PostList() {
    const films = useContext(FilmContext);

    return (
        <>
            {films.map((film) => (
                <div className="col " key={film.id}>
                    <div className="card d-flex">
                        <div>
                            <img
                                className="card-img-top"
                                src={`${film.img}`}
                                alt={film.titolo}
                                style={{ maxHeight: "200px", objectFit: "cover" }}
                            />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{film.titolo}</h4>
                            <p className="card-text">{film.descrizioneBreve}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
