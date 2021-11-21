const NovedadItem = (props) => {
    const {title, subtitle, body, image} = props;
    return(
        <div className="novedades">
            <h1>{title}</h1>
            <h5><b>{subtitle}</b></h5>
            <img src={image} className="img-novedad"/>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr/>
        </div>
    );
}

export default NovedadItem;