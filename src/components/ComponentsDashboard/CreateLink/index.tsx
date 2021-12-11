import style from "./style.module.scss";
import { api } from "../../../services/api";
import { useState } from "react";
import { useContext } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";
import { requestApiListSessao } from "../../../pages/dashboard";
import { parseCookies } from "nookies";

const CreateLink = ({ close, idCard }) => {
  const [textInput, setTextInput] = useState<string>("");
  const [textInputLink, setTextInputLink] = useState<string>("");
  const { setSessao } = useContext(DataListSectionContext);

  const { authTokenNext: token } = parseCookies();

  const createLayoutLink = async () => {
    const dataFinal = { link: textInputLink, title: textInput };

    api
      .post(`/itens/create/${idCard}`, dataFinal, {
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
          placeholder="Titulo do link"
        ></input>
        <input
          className={style.input}
          onChange={(event) => setTextInputLink(event.target.value)}
          type="text"
          placeholder="link"
        ></input>
        <button
          className={style.button}
          onClick={() => {
            close(), createLayoutLink();
          }}
        >
          Criar
        </button>
      </div>
    </section>
  );
};

export { CreateLink };
