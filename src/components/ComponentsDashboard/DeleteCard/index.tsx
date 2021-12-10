import style from "./style.module.scss";
import { api } from "../../../services/api";
import { requestApiListSessao } from "../../../pages/dashboard";
import { useContext, useState } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";

const DeleteCard = ({ close, idCard }) => {
  const { setSessao } = useContext(DataListSectionContext);
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token") || "";

    return JSON.parse(token);
  });

  const deleteLayoutCard = async () => {
    api
      .delete(`/card/deletecard/${idCard}`, {
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
        <button
          className={style.button}
          onClick={() => {
            close();
          }}
        >
          Cancelar
        </button>
        <button
          className={style.button}
          onClick={() => {
            close(), deleteLayoutCard();
          }}
        >
          Confirmar
        </button>
      </div>
    </section>
  );
};

export { DeleteCard };
