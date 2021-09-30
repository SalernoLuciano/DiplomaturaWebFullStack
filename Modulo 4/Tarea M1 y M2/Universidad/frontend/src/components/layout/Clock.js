import '../../styles/components/layout/Clock.css';
import {useState} from 'react';

const Clock = (props) => {
    const fecha =  Date.now();
    const actual = new Date(fecha);
    const fechaActual = actual.toLocaleDateString();
    let horaActual = actual.toLocaleTimeString();
    const [, setCtime] = useState(horaActual);
    const update = ()=>{
        horaActual = new Date().toLocaleTimeString();
        setCtime(horaActual);
    }

    setInterval(update,1000);

    
    return (
        <div className="date">
            {fechaActual}<br></br>{horaActual}
        </div>
    );
}

export default Clock;