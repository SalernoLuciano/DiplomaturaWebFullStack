import Clock from '../components/layout/Clock';
import '../styles/components/pages/novedadesPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/Novedades/NovedadItem';

const NovedadesPage = (props) => {

  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect( () =>{
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  }, []);

  return (
    <section className="container-sm">
      <Clock />
      <h1 className="container-sm"><i className="bi bi-newspaper"></i> News</h1>
      <div className="separador"></div>
      {
        loading ? (
          <p>Cargando...</p>
      ) : (
        novedades.map(item => <NovedadItem key={item.id} title={item.titulo} subtitle={item.subtitulo} image={item.imagen} body={item.cuerpo}/>)
      )}
    </section>
  );
}

export default NovedadesPage;