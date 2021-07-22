import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log("Success!", data);
      });
  };

  const handleInputEmail = (event) => setEmail(event.target.value);

  const handleInputPassword = (event) => setPassword(event.target.value);

  return (
    <form onSubmit={formSubmit}>
      <fieldset>
        <label htmlFor="email"> E-mail </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleInputEmail}
          inputMode="email"
          autoComplete="username"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password"> Senha </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleInputPassword}
          autoComplete="current-password"
        />
      </fieldset>

      <button type="submit">Entrar</button>
    </form>
  );
};

export default SignIn;
