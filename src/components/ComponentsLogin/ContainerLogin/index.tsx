import style from "./style.module.scss";
import { useState } from "react";
import { api } from "../../../services/api";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { FiCode } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Auth";

const ContainerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadIcon, setLoadIcon] = useState(true);
  const { signAuth } = useContext(AuthContext);

  const route = useRouter();

  const requestApiLogin = () => {
    const dataFinal = {
      email: email,
      password: password,
    };

    signAuth(dataFinal);

    setLoadIcon(false);
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
            {loadIcon ? (
              "Entrar"
            ) : (
              <FiCode className={style.load} color="#fff" size={22} />
            )}
          </button>
        </div>
      </form>
    </main>
  );
};

export { ContainerLogin };
