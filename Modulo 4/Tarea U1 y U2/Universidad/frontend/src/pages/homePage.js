import nosotros1 from '../images/nosotros/nosotros1.jpg';
import nosotros2 from '../images/nosotros/nosotros2.jpg';
import nosotros3 from '../images/nosotros/nosotros3.jpg';
import nosotros4 from '../images/nosotros/nosotros4.jpg';
import nosotros5 from '../images/nosotros/nosotros5.jpg';
import '../styles/components/pages/homePage.css';
import Card from '../components/layout/Card';
import Clock from '../components/layout/Clock';

const HomePage = (props) => {
    return (
        <main>
            <Clock/>
            <div className="container-fluid">
                <h1 className="container-sm">About Us</h1>
                <p className="container-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti quam voluptas, totam animi debitis est commodi, ea quaerat neque nostrum officiis impedit. Ad dolorem delectus ex quis dignissimos laboriosam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit maiores vel dignissimos quas sapiente amet. Corrupti, magnam. Facere, consectetur? Voluptatem possimus soluta natus id labore quidem exercitationem. Doloribus, sapiente qui?Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam modi illum tempore quod pariatur adipisci fugit, ducimus suscipit porro laborum amet aliquam sint dignissimos, aut, animi corrupti illo doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo ullam porro deleniti distinctio? Quibusdam amet id excepturi nam sapiente rerum ea rem aliquid, odio obcaecati quae quos dolor cum!. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sapiente eaque quo, accusantium cumque eligendi tempore minima. Aperiam autem nesciunt explicabo nulla cumque. Necessitatibus alias magnam aliquam. Dolorem, culpa vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt odio harum qui sit laudantium at delectus dolorum alias esse quia, ab minima? Reprehenderit, inventore totam facilis omnis tempora at quidem!Lorem, ipsum dolor sit amet consectetur  </p>
            </div>
            <div className="separador container-xs"></div>
            <div>
                <h1 className="container-sm">Staff</h1>
                <div className="personas container">
                    <Card nombre='Rodrigo Sánchez' foto={nosotros1} puesto='Responsable Aulas y Recepcion' descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                    <Card nombre='Franco Menendez' foto={nosotros2} puesto='Responsable Aulas (Turno Noche)' descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    
                    <Card nombre='Javier Portela' foto={nosotros3} puesto='Responsable Reserva y carga de espacios' descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    
                    <Card nombre='Pablo Mancuso' foto={nosotros4} puesto='Ayudante carga y reserva de espacios' descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    
                    <Card nombre='Sergio Hernández' foto={nosotros5} puesto='Empleado Aulas' descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    
                    <Card nombre='Julián Arozamena' foto={nosotros1} puesto='Empleado Aulas' descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    
                    <Card nombre='Agustín Scarabel' foto={nosotros2} puesto='Empleado Aulas' descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    
                    <Card nombre='Luciano Salerno' foto={nosotros3} puesto='Empleado Aulas' descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    
                    <Card nombre='Emiliano Lasagna' foto={nosotros4} puesto='Empleado Aulas' descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    
                    <Card nombre='Federico Arboleas' foto={nosotros5} puesto='Empleado Aulas' descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    
                </div>
            </div>
        </main>
    );
}

export default HomePage;