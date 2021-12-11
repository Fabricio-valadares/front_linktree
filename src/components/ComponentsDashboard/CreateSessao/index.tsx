import style from "./style.module.scss";
import { api } from "../../../services/api";
import { useState } from "react";
import { useContext } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";
import { requestApiListSessao } from "../../../pages/dashboard";
import { parseCookies } from "nookies";

const CreateSessao = ({ close }) => {
  const [textInput, setTextInput] = useState<string>("");
  const { setSessao } = useContext(DataListSectionContext);

  const { authTokenNext: token } = parseCookies();

  const createLayoutSessao = async () => {
    const dataFinal = { title: textInput };
    api
      .post("/section/create", dataFinal, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        requestApiListSessao(setSessao, token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className={style.conteiner}>
      <div className={style.divInputButton}>
        <input
          className={style.input}
          onChange={(event) => setTextInput(event.target.value)}
          type="text"
          placeholder="Titulo da sessão"
        ></input>
        <button
          className={style.button}
          onClick={() => {
            close(), createLayoutSessao();
          }}
        >
          Criar
        </button>
      </div>
    </section>
  );
};

export { CreateSessao };
