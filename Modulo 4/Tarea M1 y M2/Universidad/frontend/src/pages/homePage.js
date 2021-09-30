import nosotros1 from '../images/nosotros/nosotros1.jpg';
import nosotros2 from '../images/nosotros/nosotros2.jpg';
import nosotros3 from '../images/nosotros/nosotros3.jpg';
import nosotros4 from '../images/nosotros/nosotros4.jpg';
import nosotros5 from '../images/nosotros/nosotros5.jpg';
import '../styles/components/pages/homePage.css';

const HomePage = (props) => {
    return (
        <main>
            <div className="container-fluid">
                <h1 className="container-sm">About Us</h1>
                <p className="container-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti quam voluptas, totam animi debitis est commodi, ea quaerat neque nostrum officiis impedit. Ad dolorem delectus ex quis dignissimos laboriosam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit maiores vel dignissimos quas sapiente amet. Corrupti, magnam. Facere, consectetur? Voluptatem possimus soluta natus id labore quidem exercitationem. Doloribus, sapiente qui?Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam modi illum tempore quod pariatur adipisci fugit, ducimus suscipit porro laborum amet aliquam sint dignissimos, aut, animi corrupti illo doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ullam porro deleniti distinctio? Quibusdam amet id excepturi nam sapiente rerum ea rem aliquid, odio obcaecati quae quos dolor cum!. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sapiente eaque quo, accusantium cumque eligendi tempore minima. Aperiam autem nesciunt explicabo nulla cumque. Necessitatibus alias magnam aliquam. Dolorem, culpa vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt odio harum qui sit laudantium at delectus dolorum alias esse quia, ab minima? Reprehenderit, inventore totam facilis omnis tempora at quidem!Lorem, ipsum dolor sit amet consectetur  </p>
            </div>
            <div className="separador container-xs"></div>
            <div>
                <h1 className="container-sm">Staff</h1>
                <div className="personas container">
                    <div className="card">
                        <img src= {nosotros1} className="card-img-top" alt="Rodrigo Sánchez"/>
                        <div className ="card-body">
                        <h5>Rodrigo Sánchez</h5>
                        <h6>Responsable Aulas y Recepcion</h6>
                        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nosotros2} className="card-img-top" alt="Franco Menéndez"/>
                        <div className ="card-body">
                        <h5><i className ="bi bi-person-fill"></i> Franco Menéndez</h5>
                        <h6>Responsable Aulas (Turno Noche) </h6>
                        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nosotros3} className="card-img-top" alt="Javier Portela"/>
                        <div className ="card-body">
                        <h5><i className ="bi bi-person-fill"></i> Javier Portela</h5>
                        <h6>Responsable Reserva y carga de espacios</h6>
                        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nosotros4} className="card-img-top" alt="Pablo Mancuso"/>
                        <div className ="card-body">
                        <h5><i className ="bi bi-person-fill"></i> Pablo Mancuso</h5>
                        <h6>Ayudante carga y reserva de espacios</h6>
                        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nosotros5} className="card-img-top" alt="Sergio Hernández"/>
                        <div className ="card-body">
                        <h5><i className ="bi bi-person-fill"></i> Sergio Hernández</h5>
                        <h6>Empleado Aulas</h6>
                        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nosotros1} className="card-img-top" alt="Julián Arozamena"/>
                        <div className ="card-body">
                        <h5><i className ="bi bi-person-fill"></i> Julián Arozamena</h5>
                        <h6>Empleado Aulas</h6>
                        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nosotros2} className="card-img-top" alt="Agustín Scarabel"/>
                        <div className ="card-body">
                        <h5><i className ="bi bi-person-fill"></i> Agustín Scarabel</h5>
                        <h6>Empleado Aulas</h6>
                        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nosotros3} className="card-img-top" alt="Luciano Salerno"/>
                        <div className ="card-body">
                        <h5><i className ="bi bi-person-fill"></i> Luciano Salerno</h5>
                        <h6>Empleado Aulas</h6>
                        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nosotros4} className="card-img-top" alt="Emiliano Lasagna"/>
                        <div className ="card-body">
                        <h5><i className ="bi bi-person-fill"></i> Emiliano Lasagna</h5>
                        <h6>Empleado Aulas</h6>
                        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nosotros5} className="card-img-top" alt="Federico Arboleas"/>
                        <div className ="card-body">
                        <h5><i className ="bi bi-person-fill"></i> Federico Arboleas</h5>
                        <h6>Empleado Aulas</h6>
                        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;