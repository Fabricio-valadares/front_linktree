import style from "./style.module.scss";
import { api } from "../../../services/api";
import { requestApiListSessao } from "../../../pages/dashboard";
import { useContext, useState } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";

const UpdateLink = ({ close, idLink }) => {
  const { setSessao } = useContext(DataListSectionContext);
  const [textInput, setTextInput] = useState<string>(undefined);
  const [textInputTitle, setTextInputTitle] = useState<string>(undefined);
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token") || "";

    return JSON.parse(token);
  });

  const updateLayoutLink = async () => {
    const dataFinal = { link: textInput, title: textInputTitle };

    api
      .put(`/itens/updatelink/${idLink}`, dataFinal, {
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
          onChange={(event) => setTextInputTitle(event.target.value)}
          type="text"
          placeholder="Novo titulo link"
        ></input>
        <input
          className={style.input}
          onChange={(event) => setTextInput(event.target.value)}
          type="text"
          placeholder="Novo link"
        ></input>
        <button
          className={style.button}
          onClick={() => {
            close(), updateLayoutLink();
          }}
        >
          Atualizar
        </button>
      </div>
    </section>
  );
};

export { UpdateLink };
