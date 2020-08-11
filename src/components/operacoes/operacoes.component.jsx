import React from "react";
import "antd/dist/antd.css";
import MaterialTable from "material-table";

import Navbar from "../navbar/navbar.component";

const ArrayClientes = [
  {
    cpf: "12345678998",
    nome: "fulano da silva pereira",
    operacao: "aplicação",
    valor: "30.000,00",
  },
  {
    cpf: "98765432101",
    nome: "ciclano da costa",
    operacao: "emprestimo",
    valor: "15.000,00",
  },
  {
    cpf: "96385274102",
    nome: "ze pereira",
    operacao: "aplicação",
    valor: "5.000,00",
  },
];

export default function Profile() {
  const Cliente = ArrayClientes;
  return (
    <div className="scrollbar scrollbar-success">
      <Navbar />

      <div className="body-dashboard">
        <MaterialTable
          className="row-table-search"
          title=""
          columns={[
            { title: "CPF", field: "cpf" },
            { title: "Nome", field: "nome" },
            { title: "Operação", field: "operacao" },
            { title: "Valor", field: "valor" },
          ]}
          data={Cliente}
        />
      </div>
    </div>
  );
}
