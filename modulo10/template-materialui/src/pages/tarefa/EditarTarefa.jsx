import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const EditarTarefa = ({
  handleCloseEditar,
  idTarefaSelecionada,
  _,
  tarefa,
  setTarefas,
}) => {
  const [idTarefa, setIdTarefa] = useState(),
    [tituloTarefa, setTituloTarefa] = useState(""),
    [descricaoTarefa, setDescricaoTarefa] = useState(""),
    [inicioTarefa, setInicioTarefa] = useState(""),
    [fimTarefa, setFimTarefa] = useState(""),
    [recursoTarefa, setRecursoTarefa] = useState(""),
    [statusTarefa, setStatusTarefa] = useState("");
  useEffect(() => {
    setIdTarefa(idTarefaSelecionada);
    setTituloTarefa(tarefa.tituloTarefa);
    setDescricaoTarefa(tarefa.descricaoTarefa);
    setInicioTarefa(tarefa.inicioTarefa);
    setFimTarefa(tarefa.fimTarefa);
    setRecursoTarefa(tarefa.recursoTarefa);
    setStatusTarefa(tarefa.statusTarefa);
  }, [idTarefaSelecionada, tarefa]);
  const handleRecurso = (event) => {
      setRecursoTarefa(event.target.value);
    },
    handleStatus = (event) => {
      setStatusTarefa(event.target.value);
    },
    handleEditar = () => {
      if (
        !tituloTarefa ||
        !descricaoTarefa ||
        !inicioTarefa ||
        !fimTarefa ||
        !recursoTarefa ||
        !statusTarefa
      ) {
        alert(
          "Por favor, preencha todos os campos antes de salvar as alterações."
        );
        return;
      }
      setTarefas((current) =>
        current.map((obj) => {
          if (obj.idTarefa === idTarefaSelecionada) {
            return {
              ...obj,
              tituloTarefa: tituloTarefa,
              descricaoTarefa: descricaoTarefa,
              inicioTarefa: inicioTarefa,
              fimTarefa: fimTarefa,
              recursoTarefa: recursoTarefa,
              statusTarefa: statusTarefa,
            };
          }
          return obj;
        })
      );

      handleCloseEditar();
    };
  return (
    <Grid container spacing={2}>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          p: 4,
          backgroundColor: "background.paper",
        }}
      >
        <CardHeader
          title="Tarefas"
          subheader="Edição de Tarefas"
          sx={{ borderBottom: "1px solid #444", pb: 1 }}
        />
        <CardContent
          sx={{
            width: "95%",
            maxWidth: "100%",
          }}
        >
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <Input
                id="tarefa_titulo"
                aria-describedby="tarefa_titulo_helper_text"
                value={tituloTarefa}
                onChange={(e) => {
                  setTituloTarefa(e.target.value);
                }}
              />
              <FormHelperText id="tarefa_titulo_helper_text">
                Atualize o título da Tarefa (obrigatório).
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} mt={1}>
            <FormControl fullWidth required>
              <Input
                id="tarefa_descricao"
                aria-describedby="tarefa_descricao_helper_text"
                value={descricaoTarefa}
                onChange={(e) => {
                  setDescricaoTarefa(e.target.value);
                }}
                multiline
              />
              <FormHelperText id="tarefa_descricao_helper_text">
                Ajuste a descrição da Tarefa (obrigatório).
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={3}>
              <FormControl required>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  aria-describedby="tarefa_inicio_helper_text"
                  value={inicioTarefa}
                  onChange={(e) => {
                    setInicioTarefa(e.target.value);
                  }}
                  sx={{
                    color: "text.primary",
                    fontWeight: 400,
                    paddingLeft: "13px",
                  }}
                />
                <FormHelperText id="tarefa_inicio_helper_text">
                  Data de Início (obrigatória).
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl required>
                <Input
                  id="tarefa_fim"
                  type="date"
                  aria-describedby="tarefa_fim_helper_text"
                  value={fimTarefa}
                  onChange={(e) => {
                    setFimTarefa(e.target.value);
                  }}
                  sx={{
                    color: "text.primary",
                    fontWeight: 400,
                    paddingLeft: "13px",
                  }}
                />
                <FormHelperText id="tarefa_fim_helper_text">
                  Data de Finalização (obrigatória).
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  label="Recurso"
                  onChange={handleRecurso}
                  size="small"
                  sx={{
                    color: "text.primary",
                    fontWeight: 400,
                  }}
                >
                  <MenuItem value={"Recurso 1"}>Recurso 1</MenuItem>
                  <MenuItem value={"Recurso 2"}>Recurso 2</MenuItem>
                  <MenuItem value={"Recurso 3"}>Recurso 3</MenuItem>
                </Select>
                <FormHelperText>Selecione o recurso atualizado.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  label="Status"
                  onChange={handleStatus}
                  size="small"
                  sx={{
                    color: "text.primary",
                    fontWeight: 400,
                  }}
                >
                  <MenuItem value={"Aguardando"}>Aguardando</MenuItem>
                  <MenuItem value={"Em Andamento"}>Em Andamento</MenuItem>
                  <MenuItem value={"Concluída"}>Concluída</MenuItem>
                </Select>
                <FormHelperText>
                  Defina o status atualizado da tarefa.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={1}>
                <Button size="small" variant="contained" onClick={handleEditar}>
                  Salvar
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={handleCloseEditar}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default EditarTarefa;
