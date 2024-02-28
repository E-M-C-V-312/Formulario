import React, { useState, useEffect } from "react";
import { useTable, useGlobalFilter, useAsyncDebounce } from "react-table";
import RegistroService from "./RegistroService";

const useRegistro = () => {
  const [registros, setRegistros] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({
    columns,
    data: registros,
  });

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await RegistroService.getAllRegistros();
      setRegistros(response.data);
    };
    fetchData();
  }, []);

  const handleCreateRegistro = (registro) => {
    RegistroService.createRegistro(registro).then((response) => {
      setRegistros([...registros, response.data]);
    });
  };

  const handleUpdateRegistro = (id, registro) => {
    RegistroService.updateRegistro(id, registro).then((response) => {
      setRegistros(registros.map((r) => (r.id === id ? response.data : r)));
    });
  };

  const handleDeleteRegistro = (id) => {
    RegistroService.deleteRegistro(id).then(() => {
      setRegistros(registros.filter((r) => r.id !== id));
    });
  };

  return {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    globalFilter,
    handleFilterChange,
    handleCreateRegistro,
    handleUpdateRegistro,
    handleDeleteRegistro,
  };
};
