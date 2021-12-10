import style from "./style.module.scss";
import { useState } from "react";
import { api } from "../../../services/api";
import { useRouter } from "next/router";

const ContainerRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const route = useRouter();

  const requestApiLogin = () => {
    const dataFinal = {
      name: name,
      email: email,
      password: password,
      urlPiece: url,
    };

    api
      .post("/register", dataFinal)
      .then((response) => {
        route.push("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className={style.container}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestApiLogin();
        }}
        className={style.divForm}
      >
        <input
          type="text"
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="https://site/sua_url"
          onChange={(event) => setUrl(event.target.value)}
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <div className={style.divButton}>
          <button className={style.button} type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </main>
  );
};

export { ContainerRegister };
