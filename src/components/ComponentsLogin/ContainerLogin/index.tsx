import style from "./style.module.scss";
import { useState } from "react";
import { api } from "../../../services/api";
import { useRouter } from "next/router";

const ContainerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const route = useRouter();

  const requestApiLogin = () => {
    const dataFinal = {
      email: email,
      password: password,
    };

    api
      .post("/login", dataFinal)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.token));
        route.push("/dashboard");
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
          placeholder="e-mail"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="senha"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <div className={style.divButton}>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </main>
  );
};

export { ContainerLogin };
