import '../styles/components/pages/contactoPage.css';

const ContactoPage = (props) => {
    return (
        <main class="container-sm">
            <h1><i class="bi bi-envelope-open"></i> Contacto</h1>
            <hr />
            <div class="columna left">
                <form action="" method="" class="formulario">
                    <div class="form-section">
                        <h2>Datos Personales</h2>
                        <p>
                            <label for="">Coordinador</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label for="">Email</label>
                            <input type="email" />
                        </p>
                        <p>
                            <label for="">Interno</label>
                            <input type="tel" />
                        </p>
                    </div>
                    <div class="form-section">
                        <h2>Datos de Evento</h2>
                        <p>
                            <label for="">Nombre del Evento</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label for="">Fecha del Evento</label>
                            <input type="date" />
                        </p>
                        <p>
                            <label for="">Hora del Evento</label>
                            <input type="time" />
                        </p>
                        <p>
                            <label for="">Aula Reservada</label>
                            <select name="" id="">
                                <optgroup label="Alcorta">
                                    <option value="">AS1</option>
                                    <option value="">AS2</option>
                                    <option value="">AS3</option>
                                    <option value="">Cine</option>
                                    <option value="">AS5</option>
                                    <option value="">AS6</option>
                                    <option value="">A1</option>
                                    <option value="">A2</option>
                                    <option value="">A3</option>
                                    <option value="">A4</option>
                                    <option value="">A5</option>
                                    <option value="">A101</option>
                                    <option value="">A102</option>
                                    <option value="">A103</option>
                                    <option value="">A104</option>
                                    <option value="">A105</option>
                                    <option value="">A106</option>
                                    <option value="">A107</option>
                                    <option value="">A108</option>
                                    <option value="">A109</option>
                                    <option value="">A110</option>
                                    <option value="">A111</option>
                                    <option value="">A112</option>
                                    <option value="">A113</option>
                                    <option value="">A114</option>
                                    <option value="">A115</option>
                                    <option value="">A116</option>

                                </optgroup>
                                <optgroup label="Saenz Valiente">
                                    <option value="">SVE1</option>
                                    <option value="">SVE2</option>
                                    <option value="">SVE3</option>
                                    <option value="">SVE4</option>
                                </optgroup>
                                <optgroup label="Parque">
                                    <option value="">P1</option>
                                    <option value="">P2</option>
                                    <option value="">P3</option>
                                </optgroup>
                            </select>
                        </p>
                    </div>
                    <div class="form-section">
                        <h2>Pedidos para evento</h2>
                        <p>
                            <label for="">Comentarios</label>
                            <textarea name="" id=""></textarea>
                        </p>
                    </div>
                    <p class="acciones"><input type="submit" value="Enviar" /></p>
                </form>
            </div>
            <div class="columna right">

                <h2>Otras vias de contacto</h2>
                <p>Puede comunicarse con nosotros mediante las siguientes vias: </p>
                <ul>
                    <li>Interno: 113</li>
                    <li>Mail: logistica@universidad.com</li>
                </ul>
            </div>
            <div class="columna right">

                <h2>Consideraciones</h2>
                <p>Para una mejor preparacion del evento teneren consideracion: </p>
                <ul>
                    <li>Enviar los requerimientos con mas de 72hs habiles</li>
                    <li>Ser lo mas especifico posible con el orden de lo pedido, etc.</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;