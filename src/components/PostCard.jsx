export default function PostCard({ thisFilms }) {
    return (
        <div className="card d-flex">
            <div>
                <img
                    className="card-img-top"
                    src={thisFilms.image}
                    alt={thisFilms.titolo}
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                />
            </div>
            <div className="card-body">
                <h4 className="card-title">{thisFilms.title}</h4>
                <p className="card-text">{thisFilms.description}</p>
            </div>
        </div>
    )
}