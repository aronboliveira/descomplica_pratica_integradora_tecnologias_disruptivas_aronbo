import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import CriarTarefa from "./CriarTarefa";
import EditarTarefa from "./EditarTarefa";
function createData(
  idTarefa,
  tituloTarefa,
  descricaoTarefa,
  inicioTarefa,
  fimTarefa,
  statusTarefa,
  recursoTarefa
) {
  return {
    idTarefa,
    tituloTarefa,
    descricaoTarefa,
    inicioTarefa,
    fimTarefa,
    statusTarefa,
    recursoTarefa,
  };
}
const initialRows = [
    createData(
      1,
      "Tarefa 1",
      "Descrição da Tarefa 1",
      "2022-01-01",
      "2022-01-02",
      "Concluída",
      "Recurso 1"
    ),
    createData(
      2,
      "Tarefa 2",
      "Descrição da Tarefa 2",
      "2022-01-03",
      "2022-01-04",
      "Em Andamento",
      "Recurso 2"
    ),
    createData(
      3,
      "Tarefa 3",
      "Descrição da Tarefa 3",
      "2022-01-04",
      "2022-01-05",
      "Em Andamento",
      "Recurso 3"
    ),
    createData(
      4,
      "Tarefa 4",
      "Descrição da Tarefa 4",
      "2022-01-05",
      "2022-01-06",
      "Em Andamento",
      "Recurso 4"
    ),
    createData(
      5,
      "Tarefa 5",
      "Descrição da Tarefa 5",
      "2022-01-06",
      "2022-01-07",
      "Em Andamento",
      "Recurso 5"
    ),
    createData(
      6,
      "Tarefa 6",
      "Descrição da Tarefa 6",
      "2022-01-07",
      "2022-01-08",
      "Aguardando",
      "Recurso 6"
    ),
  ],
  ListarTarefa = () => {
    const [open, setOpen] = useState(false),
      [openEditar, setOpenEditar] = useState(false),
      [tarefas, setTarefas] = useState([]),
      [tarefa, setTarefa] = useState(),
      [idTarefaSelecionada, setIdTarefaSelecionada] = useState(),
      handleOpen = () => setOpen(true),
      handleClose = () => setOpen(false),
      handleCloseEditar = () => setOpenEditar(false);
    useEffect(() => {
      setTarefas(initialRows);
    }, []);
    const handleEditar = (id) => {
        setIdTarefaSelecionada(id);
        let tarefaParaEditar = tarefas.filter((obj) => obj.idTarefa === id)[0];
        setTarefa(tarefaParaEditar);
        setOpenEditar(true);
      },
      handleDeletar = (id) => {
        setTarefas((current) =>
          current.filter((tarefa) => tarefa.idTarefa !== id)
        );
      };
    return (
      <>
        <Card sx={{ m: 2, backgroundColor: "background.paper" }}>
          <CardHeader
            title="Tarefas"
            subheader="Listagem e gerenciamento de tarefas existentes"
            sx={{ borderBottom: "1px solid #444", pb: 1 }}
          />
          <CardContent>
            <TableContainer
              component={Paper}
              sx={{ backgroundColor: "background.paper" }}
            >
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="Tabela de Tarefas"
              >
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#2c2c2c" }}>
                    <TableCell sx={{ color: "text.primary" }}>#</TableCell>
                    <TableCell sx={{ color: "text.primary" }}>Título</TableCell>
                    <TableCell align="right" sx={{ color: "text.primary" }}>
                      Descrição
                    </TableCell>
                    <TableCell align="right" sx={{ color: "text.primary" }}>
                      Data de Início
                    </TableCell>
                    <TableCell align="right" sx={{ color: "text.primary" }}>
                      Data de Finalização
                    </TableCell>
                    <TableCell align="right" sx={{ color: "text.primary" }}>
                      Status
                    </TableCell>
                    <TableCell align="right" sx={{ color: "text.primary" }}>
                      Recurso
                    </TableCell>
                    <TableCell align="center" sx={{ color: "text.primary" }}>
                      Editar
                    </TableCell>
                    <TableCell align="center" sx={{ color: "text.primary" }}>
                      Excluir
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tarefas.map((row, indice) => (
                    <TableRow
                      key={indice}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:hover": {
                          backgroundColor: "#333",
                        },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "text.secondary" }}
                      >
                        {row.idTarefa}
                      </TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>
                        {row.tituloTarefa}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "text.secondary" }}>
                        {row.descricaoTarefa}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "text.secondary" }}>
                        {row.inicioTarefa}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "text.secondary" }}>
                        {row.fimTarefa}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "text.secondary" }}>
                        {row.statusTarefa}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "text.secondary" }}>
                        {row.recursoTarefa}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => handleEditar(row.idTarefa)}
                          sx={{
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleDeletar(row.idTarefa)}
                          sx={{
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions sx={{ borderTop: "1px solid #444", pt: 2 }}>
            <Button
              size="small"
              variant="contained"
              onClick={handleOpen}
              sx={{
                mr: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              Criar Tarefa
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              Cancelar
            </Button>
          </CardActions>
        </Card>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <CriarTarefa
              handleClose={handleClose}
              tarefas={tarefas}
              setTarefas={setTarefas}
            />
          </div>
        </Modal>

        <Modal
          open={openEditar}
          onClose={handleCloseEditar}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <EditarTarefa
              handleCloseEditar={handleCloseEditar}
              idTarefaSelecionada={idTarefaSelecionada}
              tarefas={tarefas}
              tarefa={tarefa}
              setTarefas={setTarefas}
            />
          </div>
        </Modal>
      </>
    );
  };
export default ListarTarefa;
