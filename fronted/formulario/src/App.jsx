import React, { useState } from 'react';

const TablaDatos = () => {
  const [datos, setDatos] = useState([]);

  const handleAgregarFila = () => {
    // Agrega una nueva fila vacía al estado de datos
    setDatos((prevDatos) => [
      ...prevDatos,
      {
        numero: '',
        nombre: '',
        apellidos: '',
        documento: '',
        planta: '',
        contratista: '',
        dependencia: '',
        correoElectronico: '',
        telefono: '',
        autorizaGrabacion: false,
        firma: '',
      },
    ]);
  };

  return (
    <div>
      <h1>Formato de reguistro Automatizacion </h1>
      <button onClick={handleAgregarFila}>Agregar Fila</button>
      <header>
        <table>
          <tr>
            <th>Fecha</th>
            <th>objetivo</th>
          </tr>
        </table>
      </header>

      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre y Apellidos</th>
            <th>Documento</th>
            <th>Planta</th>
            <th>Contratista</th>
            <th>Dependencia/Empresa</th>
            <th>Correo Electrónico</th>
            <th>Teléfono</th>
            <th>Autoriza Grabación</th>
            <th>Firma</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato, index) => (
            <tr key={index}>
              <td>{dato.numero}</td>
              <td>{dato.nombre} {dato.apellidos}</td>
              <td>{dato.documento}</td>
              <td>{dato.planta}</td>
              <td>{dato.contratista}</td>
              <td>{dato.dependencia}</td>
              <td>{dato.correoElectronico}</td>
              <td>{dato.telefono}</td>
              <td>{dato.autorizaGrabacion ? 'Sí' : 'No'}</td>
              <td>{dato.firma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatos;
