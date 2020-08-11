import React, { useState } from "react";
import "antd/dist/antd.css";
// import { Row, Col } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MaterialTable from "material-table";
import "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";

import { Button, Card, Row, Col } from "reactstrap";

import "./dashboard.styles.scss";
import Navbar from "../navbar/navbar.component";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ArrayClientes = [
  {
    cpf: "12345678998",
    nome: "fulano da silva pereira",
    rendaMensal: "3000,00",
    dataNascimento: "05/08/1985",
    statusCpf: true,
  },
  {
    cpf: "98765432101",
    nome: "ciclano da costa",
    rendaMensal: "4000,00",
    dataNascimento: "17/06/1982",
    statusCpf: false,
  },
  {
    cpf: "96385274102",
    nome: "ze pereira",
    rendaMensal: "2000,00",
    dataNascimento: "26/12/1975",
    statusCpf: true,
  },
];

export default function Profile() {
  const classes = useStyles();
  const Cliente = ArrayClientes;
  const [pesquisarClientes, setPesquisa] = useState(false);
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [rendaMensal, setRendaMensal] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [statusCpf, setStatusCpf] = useState("");

  return (
    <div className="scrollbar scrollbar-success">
      <Navbar />

      <div className="body-dashboard">
        <div className="button-pesquisa">
          <Button
            onClick={() => {
              setPesquisa(!pesquisarClientes);
            }}
          >
            <SearchIcon /> Pesquisar Cliente
          </Button>
        </div>
        {pesquisarClientes ? (
          <MaterialTable
            className="row-table-search"
            title=""
            columns={[
              { title: "CPF", field: "cpf" },
              { title: "Nome", field: "nome" },
              { title: "Renda Mensal", field: "rendaMensal" },
              { title: "Data de Nascimento", field: "dataNascimento" },
            ]}
            data={Cliente}
            actions={[
              {
                title: "Selecionar",
                icon: "save",
                tooltip: "Save User",
                onClick: (event, rowData) => {
                  setCpf(rowData.cpf);
                  setNome(rowData.nome);
                  setRendaMensal(rowData.rendaMensal);
                  setDataNascimento(rowData.dataNascimento);
                  setPesquisa(!pesquisarClientes);
                  setStatusCpf(rowData.statusCpf);
                },
              },
            ]}
            components={{
              Action: (props) => (
                <Button
                  onClick={(event) => props.action.onClick(event, props.data)}
                  color="info"
                  variant="contained"
                  style={{ textTransform: "none" }}
                  size="small"
                >
                  <AddCircleIcon />
                </Button>
              ),
            }}
          />
        ) : (
          ""
        )}
        <Row>
          <Col className="pr-md-1" md="2">
            <TextField
              id="standard-full-width"
              label="CPF"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              fullWidth
              margin="normal"
              value={cpf}
              disabled
            />
          </Col>
          <Col className="pr-md-1" md="4">
            <TextField
              id="standard-full-width"
              label="Nome"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              fullWidth
              margin="normal"
              value={nome}
              disabled
            />
          </Col>
          <Col className="pr-md-1" md="2">
            <TextField
              id="standard-full-width"
              label="Renda Mensal"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              fullWidth
              margin="normal"
              value={rendaMensal}
              disabled
            />
          </Col>
          <Col className="pr-md-1" md="2">
            <TextField
              id="standard-full-width"
              label="Data de Nascimento"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              fullWidth
              margin="normal"
              value={dataNascimento}
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {statusCpf === false ? (
              <Alert severity="error">CPF inregular e invalido!</Alert>
            ) : (
              ""
            )}

            {statusCpf === true ? (
              <Alert severity="success">CPF regular e valido!</Alert>
            ) : (
              ""
            )}
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Saldo
                </Typography>
                <Typography variant="body2" component="p">
                  R$ 50.000,00
                </Typography>
              </CardContent>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Aplicações
                </Typography>
                <Typography variant="body2" component="p">
                  R$ 10.000,00
                </Typography>
              </CardContent>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Limites Disponiveis
                </Typography>
                <Typography variant="body2" component="p">
                  R$ 550.000,00
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="pr-md-1" md="2">
            <h1>Simulador</h1>
            <TextField
              id="standard-full-width"
              label="Valor do emprestimo"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              type="number"
            />
            <TextField
              id="standard-full-width"
              label="Quantidade de parcelas"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              type="number"
            />
            <Button onClick={() => {}}>Consultar</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
