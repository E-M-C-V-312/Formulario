import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegistroService from "../services/RegistroService";

const ListarRegistro = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await RegistroService.getRegistros();
      setRegistros(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{TITULO_PAGINA_LISTAR_REGISTRO}</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.id}</td>
              <td>{registro.nombres}</td>
              <td>{registro.apellidos}</td>
              <td>
                <Link to={`${RUTA_REGISTRO_EDITAR}/${registro.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarRegistro;
