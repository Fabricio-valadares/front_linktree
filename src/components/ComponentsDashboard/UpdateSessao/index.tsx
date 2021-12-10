import style from "./style.module.scss";
import { api } from "../../../services/api";
import { requestApiListSessao } from "../../../pages/dashboard";
import { useContext, useState } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";

const UpdateSessao = ({ close, idSessao }) => {
  const { setSessao } = useContext(DataListSectionContext);
  const [textInput, setTextInput] = useState<string>("");
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token") || "";

    return JSON.parse(token);
  });

  const updateLayoutSessao = async () => {
    const dataFinal = { title: textInput };

    api
      .put(`/section/update/${idSessao}`, dataFinal, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        close();
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
          placeholder="Novo titulo sessão"
        ></input>
        <button
          className={style.button}
          onClick={() => {
            close(), updateLayoutSessao();
          }}
        >
          Atualizar
        </button>
      </div>
    </section>
  );
};

export { UpdateSessao };
