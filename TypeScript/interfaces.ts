interface Usuario {
  nome: string;
  email: string;
  endereco?: string;
}

function getUser(): Usuario {
  return {
    nome: "Henrique",
    email: "henrique@gmail.com",
  };
}

function setUser({ nome, email, endereco }: Usuario): Usuario {
  return {
    nome,
    email,
    endereco,
  };
}
