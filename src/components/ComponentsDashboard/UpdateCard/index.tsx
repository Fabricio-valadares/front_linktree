import style from "./style.module.scss";
import { api } from "../../../services/api";
import { requestApiListSessao } from "../../../pages/dashboard";
import { useContext, useState } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";
import { parseCookies } from "nookies";

const UpdateCard = ({ close, idCard }) => {
  const { setSessao } = useContext(DataListSectionContext);
  const [textInput, setTextInput] = useState<string>("");
  const { authTokenNext: token } = parseCookies();

  const updateLayoutCard = async () => {
    const dataFinal = { title: textInput };

    api
      .put(`/card/updatecard/${idCard}`, dataFinal, {
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
          onChange={(event) => setTextInput(event.target.value)}
          type="text"
          placeholder="Novo titulo card"
          className={style.input}
        ></input>
        <button
          className={style.button}
          onClick={() => {
            close(), updateLayoutCard();
          }}
        >
          Atualizar
        </button>
      </div>
    </section>
  );
};

export { UpdateCard };
