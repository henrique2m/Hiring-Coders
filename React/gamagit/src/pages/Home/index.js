import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import { Container, Input, Button } from "./styles";

const Home = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [error, setError] = useState({ status: false, message: "" });

  const requestRepositories = async (event) => {
    event.preventDefault();

    try {
      if (username === "") {
        setError({ status: true, message: "Informe seu nome de usuário." });
        return;
      }

      const repositoriesResponse = await api.get(`users/${username}/repos`);

      const { data } = repositoriesResponse;

      const nameRepositories = [];

      data.map((repository) => nameRepositories.push(repository.name));

      localStorage.setItem("repositories", JSON.stringify(nameRepositories));

      setError(false);

      history.push("/repositories");
    } catch (e) {
      setError({ status: true, message: "Usuário não localizado." });
    }
  };

  return (
    <Container>
      <form onSubmit={requestRepositories}>
        <Input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </form>

      {error.status && <span> {error.message}</span>}
    </Container>
  );
};

export default Home;
