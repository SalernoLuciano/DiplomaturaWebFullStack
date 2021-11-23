import Clock from '../components/layout/Clock';
import '../styles/components/pages/contactoPage.css';
import React, {useState} from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        coordinador: '',
        email: '',
        interno: '',
        nombreEvento: '',
        fecha: '',
        hora: '',
        aula: '',
        comentario: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm);
        }
    }

    return (
        <main className="container-sm">
            <Clock/>
            <h1><i className="bi bi-envelope-open"></i> Contacto</h1>
            <hr />
            <div className="columna left">
                <form action="" method="" className="formulario" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h2>Datos Personales</h2>
                        <p>
                            <label for="">Coordinador</label>
                            <input type="text" id="coordinador" name="coordinador" value={formData.coordinador} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="">Email</label>
                            <input type="email" id="email"  name="email" value={formData.email} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="">Interno</label>
                            <input type="tel" id="interno" name="interno" value={formData.interno} onChange={handleChange}/>
                        </p>
                    </div>
                    <div className="form-section">
                        <h2>Datos de Evento</h2>
                        <p>
                            <label for="">Nombre del Evento</label>
                            <input type="text" id="nombreEvento" name="nombreEvento" value={formData.nombreEvento} onChange={handleChange}/> 
                        </p>
                        <p>
                            <label for="">Fecha del Evento</label>
                            <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="">Hora del Evento</label>
                            <input type="time" id="hora" name="hora" value={formData.hora} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="">Aula Reservada</label>
                            <select name="aula" id="aula" value={formData.aula} onChange={handleChange}>
                                <optgroup label="Alcorta">
                                    <option value="AS1">AS1</option>
                                    <option value="AS2">AS2</option>
                                    <option value="AS3">AS3</option>
                                    <option value="AS4">Cine</option>
                                    <option value="AS5">AS5</option>
                                    <option value="AS6">AS6</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                    <option value="A5">A5</option>
                                    <option value="A101">A101</option>
                                    <option value="A102">A102</option>
                                    <option value="A103">A103</option>
                                    <option value="A104">A104</option>
                                    <option value="A105">A105</option>
                                    <option value="A106">A106</option>
                                    <option value="A107">A107</option>
                                    <option value="A108">A108</option>
                                    <option value="A109">A109</option>
                                    <option value="A110">A110</option>
                                    <option value="A111">A111</option>
                                    <option value="A112">A112</option>
                                    <option value="A113">A113</option>
                                    <option value="A114">A114</option>
                                    <option value="A115">A115</option>
                                    <option value="A116">A116</option>
                                </optgroup>
                                <optgroup label="Saenz Valiente">
                                    <option value="SVE1">SVE1</option>
                                    <option value="SVE2">SVE2</option>
                                    <option value="SVE3">SVE3</option>
                                    <option value="SVE4">SVE4</option>
                                </optgroup>
                                <optgroup label="Parque">
                                    <option value="P1">P1</option>
                                    <option value="P2">P2</option>
                                    <option value="P3">P3</option>
                                </optgroup>
                            </select>
                        </p>
                    </div>
                    <div className="form-section">
                        <h2>Pedidos para evento</h2>
                        <p>
                            <label for="">Comentarios</label>
                            <textarea name="comentario" id="comentario" value={formData.comentario} onChange={handleChange}></textarea>
                        </p>
                    </div>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className="acciones"><input type="submit" value="Enviar" /></p>
                </form>
            </div>
            <div className="columna right">

                <h2>Otras vias de contacto</h2>
                <p>Puede comunicarse con nosotros mediante las siguientes vias: </p>
                <ul>
                    <li>Interno: 113</li>
                    <li>Mail: logistica@universidad.com</li>
                </ul>
            </div>
            <div className="columna right">

                <h2>Consideraciones</h2>
                <p>Para una mejor preparacion del evento tener en consideracion: </p>
                <ul>
                    <li>Enviar los requerimientos con mas de 72hs habiles</li>
                    <li>Ser lo mas especifico posible con el orden de lo pedido, etc.</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;