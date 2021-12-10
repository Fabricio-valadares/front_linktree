import style from "./style.module.scss";
import { api } from "../../../services/api";
import { useState } from "react";
import { useContext } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";
import { requestApiListSessao } from "../../../pages/dashboard";

const CreateCard = ({ close, idSessao }) => {
  const [textInput, setTextInput] = useState<string>("");
  const { setSessao } = useContext(DataListSectionContext);

  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token") || "";

    return JSON.parse(token);
  });

  const createLayoutCard = async () => {
    const dataFinal = { title: textInput };

    api
      .post(`/card/create/${idSessao}`, dataFinal, {
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
          onChange={(event) => setTextInput(event.target.value)}
          type="text"
          placeholder="Titulo do card"
          className={style.input}
        ></input>
        <button
          className={style.button}
          onClick={() => {
            close(), createLayoutCard();
          }}
        >
          Criar
        </button>
      </div>
    </section>
  );
};

export { CreateCard };
