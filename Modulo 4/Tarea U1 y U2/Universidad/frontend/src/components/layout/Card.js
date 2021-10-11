const Card = (props) => {
    return (
        <div className="card">
            <img src={props.foto} className="card-img-top" alt={props.nombre} />
            <div className="card-body">
                <h5><i className="bi bi-person-fill"></i>{props.nombre}</h5>
                <h6>{props.puesto}</h6>
                <p className="card-text">{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Card;