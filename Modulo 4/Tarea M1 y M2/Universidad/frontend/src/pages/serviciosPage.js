import proyector from '../images/servicios/proyector.jpg';
import consola from '../images/servicios/consola.webp';
import mic from '../images/servicios/mic.jpg';
import potencia from '../images/servicios/potencia.jpg';
import '../styles/components/pages/serviciosPage.css';

const ServiciosPage = (props) => {
    return (
        <main className="container-sm">
            <h1 className="container-sm"><i className="bi bi-tools"></i> Services & Equipment</h1>
            <div className="service container-sm">
                <img src={proyector} width="150" alt="Proyector" />
                <div className="info">
                    <h4>Proyection</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur fuga praesentium expedita, dolores voluptate quidem consequatur veritatis sequi, distinctio nihil ipsa ex. Veritatis, ipsam minima? Earum nostrum ea iusto.</p>
                </div>
            </div>
            <div className="service container-sm">
                <img src={mic} width="150" alt="Microphone" />
                <div className="info">
                    <h4>Microphone</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur fuga praesentium expedita, dolores voluptate quidem consequatur veritatis sequi, distinctio nihil ipsa ex. Veritatis, ipsam minima? Earum nostrum ea iusto.</p>
                </div>
            </div>
            <div className="service container-sm">
                <img src={consola} width="150" alt="Console" />
                <div className="info">
                    <h4>Audion Console</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur fuga praesentium expedita, dolores voluptate quidem consequatur veritatis sequi, distinctio nihil ipsa ex. Veritatis, ipsam minima? Earum nostrum ea iusto.</p>
                </div>
            </div>
            <div className="service container-sm">
                <img src={potencia} width="150" alt="Potencia" />
                <div className="info">
                    <h4>Audio Potenciation</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur fuga praesentium expedita, dolores voluptate quidem consequatur veritatis sequi, distinctio nihil ipsa ex. Veritatis, ipsam minima? Earum nostrum ea iusto.</p>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;