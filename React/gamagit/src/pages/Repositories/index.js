import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const repository = JSON.parse(localStorage.getItem("repositories"));
    setRepositories(repository);
  }, []);

  return (
    <>
      <h1>Repositories</h1>
      <ul>
        {repositories.map((repository) => (
          <li key={repository}>{repository}</li>
        ))}
      </ul>
      <Link to="/">Voltar</Link>
    </>
  );
};

export default Repositories;
